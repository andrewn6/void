import fastify from "fastify";
import fastifyBlipp from "fastify-blipp";
import { Server, IncomingMessage, ServerResponse } from "http";

server.register(fastifyBlipp);
const start = async () => {
  try {
    await server.listen(3000, '0.0.0.0');
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

process.on("uncaughtException", error => {
  console.error(err);
});

start();

