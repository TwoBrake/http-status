// Resources
import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";

// Controllers
// oxlint-disable-next-line sort-imports
import MonitorController from "../controllers/monitor.controller";

// Services
import MonitorService from "../services/monitor.service";

@Module({
  controllers: [MonitorController],
  imports: [ScheduleModule.forRoot()],
  providers: [MonitorService]
})
export class AppModule {}
