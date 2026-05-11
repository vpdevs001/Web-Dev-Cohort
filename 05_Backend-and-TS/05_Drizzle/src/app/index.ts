import { FastifyInstance } from "fastify";
import jwt from "@fastify/jwt";
import cookie from "@fastify/cookie";
import { authRouter } from "./auth/routes";

export async function createApplication(fastify: FastifyInstance) {
  fastify.get("/", (_, reply) => {
    reply.send({ message: "Welcome to Ved Auth Service" });
  });

  // plugins
  fastify.register(jwt, { secret: process.env.JWT_SECRET! });
  fastify.register(cookie);

  // routes
  fastify.register(authRouter, { prefix: "/auth" });
}
