import { FastifyPluginAsync  } from "fastify";
import { runInNewContext } from "vm";

const health: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.decorateRequest('service', 'be-fastify-template');

    fastify.get('/health', async function (req: any, _reply) {
        return {
            api: 'Health Check',
            status: 'Success',
            healthStatus: 'Healthy',
            service: req.service,
            secondary: req.secondary
        };
    });

    fastify.register(async function innerContext (innerFasitfy) {
        innerFasitfy.decorateRequest('secondary', 'secondary context')

        innerFasitfy.get('/health/secondary', async function (req: any, _reply) {
            return {
                api: 'Second Health Check',
                status: 'Success',
                healthStatus: 'Healthy',
                service: req.service,
                secondary: req.secondary
            };
        })
    })
}

export default health;