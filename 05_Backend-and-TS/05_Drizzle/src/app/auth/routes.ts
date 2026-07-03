import { expressInstance } from "express";
import AuthenticationController from "./controller";

const authenticationController = new AuthenticationController();

export async function authRouter(express: expressInstance) {
  express.post(
    "/sign-up",
    authenticationController.handleSignup.bind(authenticationController),
  );

  express.post(
    "/sign-in",
    authenticationController.handleSignin.bind(authenticationController),
  );

  express.get(
    "/me",
    {
      preHandler: async (request, _) => {
        await request.jwtVerify();
      },
    },
    authenticationController.handleMe.bind(authenticationController),
  );

  express.post(
    "/refresh",
    authenticationController.handleRefresh.bind(authenticationController),
  );
}
