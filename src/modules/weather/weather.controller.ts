import { GetWeatherByCityParams } from '@dtos/weather';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('/')
  @ApiTags('Weather')
  @ApiOperation({
    summary: 'Get a weather by a city',
    description:
      'Get a weather by a city. ' +
      'This route receive a city by query params, and can receive a unit value, ' +
      'and then return the weather data for that city',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    schema: {
      type: 'Object',
      example: {
        statusCode: 200,
        message: 'Success',
        data: {
          city: 'São Paulo',
          weather: 'Clear',
          temperature: 29,
          unit: 'Celsius',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
    schema: {
      type: 'Object',
      example: {
        statusCode: 400,
        message: ['unit must be one of the following values: c, k, f'],
        error: 'Bad Request',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    schema: {
      type: 'Object',
      example: {
        statusCode: 404,
        message: 'City not found',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    schema: {
      type: 'Object',
      example: {
        statusCode: 500,
        message: 'Internal server error',
      },
    },
  })
  @ApiResponse({
    status: 503,
    description: 'Service unavailable',
    schema: {
      type: 'Object',
      example: {
        statusCode: 503,
        message: "Can't connect to weather external api",
      },
    },
  })
  async getByCity(@Query() { city, unit }: GetWeatherByCityParams) {
    const weatherData = await this.weatherService.getByCity({
      city: decodeURI(city),
      unit,
    });

    return {
      statusCode: 200,
      message: 'Success',
      data: weatherData,
    };
  }
}
