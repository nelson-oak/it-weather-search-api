import { WeatherModule } from '@modules/weather/weather.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [WeatherModule],
  providers: [],
  exports: [],
})
export class HttpModule {}
