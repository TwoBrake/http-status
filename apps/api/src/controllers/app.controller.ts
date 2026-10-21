// Resources
import { Controller, Get } from "@nestjs/common";

// Services
import AppService from "../services/app.service";

@Controller()
export default class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
}
