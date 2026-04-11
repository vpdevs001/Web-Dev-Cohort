import type { Request, Response } from "express";
import { loginPayloadModel, signupPayloadModel } from "./models";
import APIError from "../common/error";
import APIResponse from "../common/response";
import { db } from "../../db";
import { usersTable } from "../../db/models/user.model";
import { eq } from "drizzle-orm";
import { createHmac, randomBytes } from "node:crypto";
import { createUserToken } from "./utils/tokens";

class AuthController {
  public static async handleSignup(req: Request, res: Response) {
    const validationResult = await signupPayloadModel.safeParseAsync(req.body);

    if (!validationResult.success) {
      throw APIError.badRequest("Invalid credentials");
    }

    const { firstName, lastName, email, password } = validationResult.data;

    const salt = randomBytes(32).toString("hex");
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    try {
      const [user] = await db
        .insert(usersTable)
        .values({ firstName, lastName, email, password: hashedPassword, salt })
        .returning({ id: usersTable.id });

      return APIResponse.created(res, "Signup successful", { data: user.id });
    } catch (error: any) {
      if (error.code === "23505") {
        throw APIError.conflict("User with this email already exists");
      }

      throw error;
    }
  }

  public static async handleLogin(req: Request, res: Response) {
    const validationResult = await loginPayloadModel.safeParseAsync(req.body);

    if (!validationResult.success) {
      throw APIError.badRequest("Invalid credentials");
    }

    const { email, password } = validationResult.data;

    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email))
      .limit(1);

    if (!user) {
      throw APIError.notFound("User not found");
    }

    const salt = user.salt;
    const hashedPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashedPassword !== user.password) {
      throw APIError.badRequest("Invalid credentials");
    }

    const token = createUserToken({ id: user.id });

    return APIResponse.ok(res, "Login successful", { token });
  }
}

export default AuthController;
