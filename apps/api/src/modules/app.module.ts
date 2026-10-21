// Resources
// Controllers
import AppController from "../controllers/app.controller";

// Services
import AppService from "../services/app.service";

// Resources
import { Module } from "@nestjs/common";

@Module({
  controllers: [AppController],
  imports: [],
  providers: [AppService]
})
export class AppModule {}
