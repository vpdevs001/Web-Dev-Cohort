import express from "express";
import type { Express } from "express";

export const createApp = (): Express => {
  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => res.send("Welcome to Ved API!"));

  return app;
};
