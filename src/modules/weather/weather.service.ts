import {
  GetByCityOutput,
  GetWeatherByCityParams,
  WeatherExternal,
} from '@dtos/weather';
import { AppError } from '@errors/app-error';
import { AxiosService } from '@http/axios/axios.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  constructor(private axiosService: AxiosService) {}

  async getByCity({
    city,
    unit = 'c',
  }: GetWeatherByCityParams): Promise<GetByCityOutput> {
    let weatherUnit = '';
    let unitName = '';

    switch (unit) {
      case 'c':
        weatherUnit = 'metric';
        unitName = 'Celsius';
        break;
      case 'f':
        weatherUnit = 'imperial';
        unitName = 'Fahrenheit';
        break;
      default:
        weatherUnit = 'standard';
        unitName = 'Kelvin';
    }

    try {
      const { data: weatherData } =
        await this.axiosService.weather.get<WeatherExternal>(
          `weather?q=${encodeURI(city)}&units=${weatherUnit}&appid=${
            this.axiosService.weatherAppId
          }`,
        );

      const weatherDescription = weatherData.weather
        .map((e) => e.main)
        .join(', ');

      return {
        city: weatherData.name,
        weather: weatherDescription,
        temperature: weatherData.main.temp,
        unit: unitName,
      };
    } catch (err) {
      if (err?.response?.status === 404) {
        throw new AppError('City not found', 404);
      }

      throw new AppError("Can't connect to weather external api", 503);
    }
  }
}
