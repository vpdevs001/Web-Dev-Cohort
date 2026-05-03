import { redis, subscriber } from "../config/redis.js";
import { updateCheckboxState, CHECKBOX_STATE_KEY } from "./checkbox.service.js";

const RATE_LIMIT_MS = 5 * 1000;

export async function initSocketService(io) {
  await subscriber.subscribe("internal-server:checkbox:change");

  subscriber.on("message", (channel, message) => {
    if (channel === "internal-server:checkbox:change") {
      const { index, checked } = JSON.parse(message);
      io.emit("server:checkbox:change", { index, checked });
    }
  });

  io.on("connection", (socket) => {
    socket.on("client:checkbox:change", async (data) => {
      const lastOperationTime = await redis.get(`rate-limiting:${socket.id}`);
      if (lastOperationTime) {
        const timeElapsed = Date.now() - lastOperationTime;
        if (timeElapsed < RATE_LIMIT_MS) {
          const currentState = await redis.get(CHECKBOX_STATE_KEY);
          const state = currentState ? JSON.parse(currentState) : [];
          socket.emit("server:error", { error: "Please wait" });
          socket.emit("server:checkbox:revert", {
            index: data.index,
            checked: state[data.index] ?? false,
          });
          return;
        }
      }
      await redis.set(`rate-limiting:${socket.id}`, Date.now(), "EX", 10);
      await updateCheckboxState(data.index, data.checked);
    });

    socket.on("disconnect", async () => {
      await redis.del(`rate-limiting:${socket.id}`);
    });
  });
}
