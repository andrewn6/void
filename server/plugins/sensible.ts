// A plugin for fastify defaults.

import sensible from "fastify-sensible";
import fp from "fastify-plugin";

export default fp(async function (fastify) {
    fastify.register(sensible, {
        errorHandler: false
    });
});
