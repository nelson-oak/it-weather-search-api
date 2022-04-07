import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AxiosService {
  public weather: AxiosInstance;
  public weatherAppId: string;

  constructor(private configService: ConfigService) {
    this.weather = axios.create({
      baseURL: this.configService.get('OPEN_WEATHER_API_URL'),
    });

    this.weatherAppId = this.configService.get('OPEN_WEATHER_APP_ID');
  }
}
