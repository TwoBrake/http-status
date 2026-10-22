// Resources
import { Cron } from "@nestjs/schedule";
import { Injectable } from "@nestjs/common";
import configuration from "@http-status/config";

type CheckKey = keyof typeof configuration.checks;

type StateList = Record<CheckKey, boolean>;

@Injectable()
export default class MonitorService {
  private states: StateList = {};

  public async onModuleInit(): Promise<void> {
    this.states = Object.fromEntries(Object.entries(configuration.checks).map(([name]) => [name, false]));
    await this.updateStates();
  }

  // oxlint-disable-next-line new-cap
  @Cron(`*/${String(configuration.checkInterval)} * * * *`, { waitForCompletion: true })
  public async updateStates(): Promise<void> {
    await Promise.all(
      Object.keys(this.states).map(async name => {
        this.states[name] = await this.checkState(configuration.checks[name]);
      })
    );
  }

  private async checkState(state: (typeof configuration.checks)[CheckKey]): Promise<boolean> {
    try {
      const result = await fetch(state.url, {
        headers: state.headers,
        method: state.method ?? "GET",
        signal: AbortSignal.timeout(10_000)
      });

      return state.acceptedCodes && state.acceptedCodes.length > 0
        ? state.acceptedCodes.includes(result.status)
        : result.ok;
    } catch {
      return false;
    }
  }

  public getState(key: CheckKey): (typeof this.states)[keyof typeof this.states] {
    return this.states[key];
  }

  public getStates(): typeof this.states {
    return this.states;
  }
}
