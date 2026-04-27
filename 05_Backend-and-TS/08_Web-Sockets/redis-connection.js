import Redis from "ioredis";

function makeConnection() {
  return new Redis({
    host: "localhost",
    port: 6379,
  });
}

export const redis = makeConnection();
export const publisher = makeConnection();
export const subscriber = makeConnection();
