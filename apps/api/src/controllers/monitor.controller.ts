// Resources
import { Controller, Get, NotFoundException, Param, ServiceUnavailableException } from "@nestjs/common";

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
    const healthy = this.monitors.getState(monitorName);
    if (healthy === undefined) {
      throw new NotFoundException("The following monitor was not found.");
    }

    if (!healthy) {
      throw new ServiceUnavailableException(healthy);
    }

    return healthy;
  }
}
