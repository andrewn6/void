import Fastify from "fastify";
import { logger } from "./modules/logger";
import AutoLoad from "fastify-autoload";

const fastify = Fastify();
const port = 3000;

function addRoutes() {
  // TODO: add basic routes
  logger.info("Registered routes.");
}
function runServer(): void {
  fastify.listen(port, "0.0.0.0", (err, address) => {
   if (!err) {
     logger.info(`Server is running.`);
     return;
   }

   logger.error(err.message);
   return process.exit(1);
  });
}
function main(): Promise<void> {
  runServer();
}

main().catch(console.error);
