import { Controller, Get } from '@nestjs/common';
import { ScopeByDefaultService } from './services/scope-by-default.service';
import { ScopeByRequestService } from './services/scope-by-request.service';

@Controller()
export class AppController {
  constructor(
    private readonly scopeByDefaultService: ScopeByDefaultService,
    private readonly scopeByRequesttService: ScopeByRequestService
  ) {}

  @Get('/default/req-a')
  async defaultReqA(): Promise<string> {
    return (await this.scopeByDefaultService.getValuePromise());
  }

  @Get('/default/req-b')
  defaultReqB(): string {
    return this.scopeByDefaultService.getValue();
  }

  @Get('/request/req-a')
  async requestReqA(): Promise<string> {
    return (await this.scopeByRequesttService.getValuePromise());
  }

  @Get('/request/req-b')
  requestReqB(): string {
    return this.scopeByRequesttService.getValue();
  }
}
