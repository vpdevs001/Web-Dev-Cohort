import express from "express";
import type { Express } from "express";
import authRoutes from "./auth/routes";
import { authenticationMiddleware } from "./middlewares/auth.middlewares";
import { errorMiddleware } from "./middlewares/error.middlewares";

export const createApp = (): Express => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(authenticationMiddleware());

  app.get("/", (req, res) => res.send("Welcome to Ved API!"));

  app.use("/auth", authRoutes);

  app.use(errorMiddleware());

  return app;
};
