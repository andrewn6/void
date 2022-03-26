// A simple authentication plugin, used for authenticating users.

import fp from "fastify-plugin";
import fastifyCookie from "fastify-cookie";

export default fp(async (fastify, _) => {
    fastify.register(fastifyCookie, {
      secret: process.env.COOKIE_SECRET,
    });
    fastify.decorate("user", null);
  });