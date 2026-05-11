import { createServer } from "http";
import Fastify from "fastify";
import { createApplication } from "./app";

async function main() {
  try {
    const fastify = Fastify({
      serverFactory: (handler) => createServer(handler),
    });

    await createApplication(fastify);

    const PORT: number = 8000;

    await fastify.listen({ port: PORT, host: "0.0.0.0" });

    console.log(`HTTP Server is running on PORT ${PORT}`);
  } catch (error) {
    console.log(`Error starting HTTP Server`);
    throw error;
  }
}

main();
