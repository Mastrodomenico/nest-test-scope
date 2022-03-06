import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScopeByDefaultService } from './services/scope-by-default.service';
import { ScopeByRequestService } from './services/scope-by-request.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ScopeByRequestService, ScopeByDefaultService],
})
export class AppModule {}
