// Resources
import { Controller, Get, NotFoundException, Param } from "@nestjs/common";

// Services
import MonitorService, { type StateList } from "../services/monitor.service";

@Controller("api/monitors")
export default class MonitorController {
  public constructor(private readonly monitors: MonitorService) {}

  @Get()
  public getMonitors(): StateList {
    return this.monitors.getStates();
  }

  @Get(":monitor")
  // oxlint-disable-next-line new-cap
  public getSpecificMonitor(@Param("monitor") monitorName: string): StateList[keyof StateList] {
    const monitor = this.monitors.getState(monitorName);
    if (!monitor) {
      throw new NotFoundException("The following monitor was not found.");
    }

    return monitor;
  }
}
