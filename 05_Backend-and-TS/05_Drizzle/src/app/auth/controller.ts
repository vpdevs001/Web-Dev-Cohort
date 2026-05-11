import { type FastifyRequest, type FastifyReply } from "fastify";
import { randomBytes, createHmac } from "node:crypto";
import { signinPayloadModel, signupPayloadModel } from "./models";
import { db } from "../../db";
import { usersTable } from "../../db/schema";
import { eq } from "drizzle-orm";

interface UserTokenPayload {
  id: string;
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: UserTokenPayload;
    user: UserTokenPayload;
  }
}

class AuthenticationController {
  public async handleSignup(request: FastifyRequest, reply: FastifyReply) {
    const validationResult = await signupPayloadModel.safeParseAsync(
      request.body,
    );

    if (validationResult.error)
      return reply.status(400).send({
        message: "body validation failed",
        error: validationResult.error.issues,
      });

    const { firstName, lastName, email, password } = validationResult.data;

    const userEmailResult = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (userEmailResult.length > 0)
      return reply.status(400).send({
        error: "duplicate entry",
        message: `user with email ${email} already exists`,
      });

    const salt = randomBytes(32).toString("hex");
    const hash = createHmac("sha256", salt).update(password).digest("hex");

    const [result] = await db
      .insert(usersTable)
      .values({
        firstName,
        lastName,
        email,
        password: hash,
        salt,
      })
      .returning({ id: usersTable.id });

    return reply.status(201).send({
      message: "user has been created successfully",
      data: { id: result?.id },
    });
  }

  public async handleSignin(request: FastifyRequest, reply: FastifyReply) {
    const validationResult = await signinPayloadModel.safeParseAsync(
      request.body,
    );

    if (validationResult.error)
      return reply.status(400).send({
        message: "body validation failed",
        error: validationResult.error.issues,
      });

    const { email, password } = validationResult.data;

    const [userSelect] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (!userSelect)
      return reply
        .status(404)
        .send({ message: `user with email ${email} does not exists` });

    const salt = userSelect.salt!;
    const hash = createHmac("sha256", salt).update(password).digest("hex");

    if (userSelect.password !== hash)
      return reply
        .status(400)
        .send({ message: `email or password is incorrect` });

    const accessToken = request.server.jwt.sign(
      { id: userSelect.id },
      { expiresIn: "15m" },
    );

    const refreshToken = request.server.jwt.sign(
      { id: userSelect.id },
      { expiresIn: "7d" },
    );

    reply.setCookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return reply.send({
      message: "Signin Success",
      data: { accessToken },
    });
  }

  public async handleMe(request: FastifyRequest, reply: FastifyReply) {
    await request.jwtVerify();
    const { id } = request.user as UserTokenPayload;

    const [userResult] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));

    return reply.send({
      firstName: userResult?.firstName,
      lastName: userResult?.lastName,
      email: userResult?.email,
    });
  }

  public async handleRefresh(request: FastifyRequest, reply: FastifyReply) {
    const refreshToken = request.cookies.refreshToken;

    if (!refreshToken)
      return reply.status(401).send({ message: "no refresh token provided" });

    const payload = request.server.jwt.verify<UserTokenPayload>(refreshToken);

    if (!payload)
      return reply.status(401).send({ message: "invalid refresh token" });

    const accessToken = request.server.jwt.sign(
      { id: payload.id },
      { expiresIn: "15m" },
    );

    return reply.send({
      message: "token refreshed",
      data: { accessToken },
    });
  }
}

export default AuthenticationController;
