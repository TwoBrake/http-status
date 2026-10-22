// Resources
import { AppModule } from "./modules/app.module";
import { NestFactory } from "@nestjs/core";
import configuration from "@http-status/config";
import { configureServerLogger } from "@http-status/utility";
import { logger } from "./lib/utility";

/** Invokes the application. */
const main = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  await configureServerLogger();

  await app.listen(configuration.serverPort);
  logger.info(`Server started on port ${String(configuration.serverPort)}.`);
};

void main();
