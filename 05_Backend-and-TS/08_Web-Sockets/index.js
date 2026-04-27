import "dotenv/config";

import http from "node:http";
import path from "node:path";

import express from "express";
import { Server } from "socket.io";

import { publisher, redis, subscriber } from "./redis-connection.js";

const CHECKBOX_SIZE = 100;
const CHECKBOX_STATE_KEY = "checkbox-state";

async function main() {
  // Variables
  const PORT = process.env.PORT ?? 8000;

  const app = express();
  const server = http.createServer(app);

  const io = new Server();
  io.attach(server);

  await subscriber.subscribe("internal-server:checkbox:change");

  subscriber.on("message", (channel, message) => {
    if (channel === "internal-server:checkbox:change") {
      const { index, checked } = JSON.parse(message);

      io.emit("server:checkbox:change", { index, checked });
    }
  });

  // Sockets
  io.on("connection", (socket) => {
    // console.log(`Socket connecte, ${socket.id}`);
    socket.on("client:checkbox:change", async (data) => {
      //   console.log(data);
      const lastOperationTime = await redis.get(`rate-limiting:${socket.id}`);

      if (lastOperationTime) {
        const timeElapsed = Date.now() - lastOperationTime;
        if (timeElapsed < 3 * 1000) {
          socket.emit("server:error", { error: `Please wait` });
          return;
        }
      }
      await redis.set(`rate-limiting:${socket.id}`, Date.now());

      const exisitingState = await redis.get(CHECKBOX_STATE_KEY);

      if (exisitingState) {
        const remoteData = JSON.parse(exisitingState);
        remoteData[data.index] = data.checked;

        await redis.set(CHECKBOX_STATE_KEY, JSON.stringify(remoteData));
      } else {
        await redis.set(
          CHECKBOX_STATE_KEY,
          JSON.stringify(new Array(CHECKBOX_SIZE).fill(false)),
        );
      }
      await publisher.publish(
        "internal-server:checkbox:change",
        JSON.stringify(data),
      );
    });
  });

  // Express
  app.use(express.static(path.resolve("./public")));

  app.get("/health", async (req, res) => res.json({ healthy: true }));

  app.get("/checkboxes", async (req, res) => {
    const exisitingState = await redis.get(CHECKBOX_STATE_KEY);

    if (exisitingState) {
      const remoteData = JSON.parse(exisitingState);
      return res.json({ checkboxes: remoteData });
    }
    return res.json({ checkboxes: new Array(CHECKBOX_SIZE).fill(false) });
  });

  server.listen(PORT, () =>
    console.log(`Server is runnig on http://localhost:${PORT}`),
  );
}

main();
