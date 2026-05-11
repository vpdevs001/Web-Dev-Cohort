import { FastifyInstance } from "fastify";
import AuthenticationController from "./controller";

const authenticationController = new AuthenticationController();

export async function authRouter(fastify: FastifyInstance) {
  fastify.post(
    "/sign-up",
    authenticationController.handleSignup.bind(authenticationController),
  );

  fastify.post(
    "/sign-in",
    authenticationController.handleSignin.bind(authenticationController),
  );

  fastify.get(
    "/me",
    {
      preHandler: async (request, _) => {
        await request.jwtVerify();
      },
    },
    authenticationController.handleMe.bind(authenticationController),
  );

  fastify.post(
    "/refresh",
    authenticationController.handleRefresh.bind(authenticationController),
  );
}
