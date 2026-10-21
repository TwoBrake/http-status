// Resources
import { AppModule } from "./modules/app.module";
import { NestFactory } from "@nestjs/core";

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
};

void bootstrap();
