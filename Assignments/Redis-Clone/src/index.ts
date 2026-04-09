import { createServer } from "node:http";
import {createApp} from "./app";
import "dotenv/config";

const main = async () => {
  try {
    const server = createServer(createApp());
    const PORT: number = process.env.PORT ? +process.env.PORT : 3000;

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting the server:", error);
    throw error;
  }
};

main();
