import "dotenv/config";
import http from "node:http";
import path from "node:path";

import cookieParser from "cookie-parser";
import express from "express";
import { Server } from "socket.io";

import { initSocketService } from "./services/socket.service.js";
import checkboxRoutes from "./routes/checkbox.routes.js";
import authRoutes from "./routes/auth.routes.js";

async function main() {
  const PORT = process.env.PORT ?? 8000;

  const app = express();
  const server = http.createServer(app);
  const io = new Server();

  io.attach(server);

  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static(path.resolve("./public")));
  app.get("/health", (req, res) => res.json({ healthy: true }));
  app.use("/checkboxes", checkboxRoutes);
  app.use("/api/auth", authRoutes);

  await initSocketService(io);

  server.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`),
  );
}

main();
