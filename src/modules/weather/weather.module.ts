import { Module } from '@nestjs/common';

import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
