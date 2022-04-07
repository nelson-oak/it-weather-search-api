import { AxiosService } from '@http/axios/axios.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AxiosService, WeatherService],
  controllers: [WeatherController],
})
export class WeatherModule {}
