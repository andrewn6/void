import { FastifyInstance  } from "fastify";
import { Server, IncomingMessage, ServerResponse } from "http";

export interface ServerConfig {
    NODE_ENV: string;
    DB_URL: string;
}

export interface FastifyServer
  extends FastifyInstance<Server, IncomingMessage, ServerResponse> {
  config: ServerConfig;
  upAndRunning: boolean;
}
