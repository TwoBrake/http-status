// Resources
import { Module } from '@nestjs/common';

// Controllers
import AppController from '../controllers/app.controller';

// Services
import AppService from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
