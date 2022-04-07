import { GetByCityOutput, GetWeatherByCityParam } from '@dtos/weather';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  async getByCity(data: GetWeatherByCityParam): Promise<GetByCityOutput> {
    return {
      city: 'São Paulo',
      weather: 'Clear',
      temperature: 20,
      unit: 'Celsius',
    };
  }
}
