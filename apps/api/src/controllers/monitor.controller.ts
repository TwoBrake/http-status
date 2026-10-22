// Resources
import { Controller } from "@nestjs/common";

// Services
import MonitorService from "../services/monitor.service";

@Controller("api/monitors")
export default class MonitorController {
  public constructor(private readonly monitors: MonitorService) {}
}
