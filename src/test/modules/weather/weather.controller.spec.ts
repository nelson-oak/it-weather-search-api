import { AxiosService } from '@http/axios/axios.service';
import { WeatherController } from '@modules/weather/weather.controller';
import { WeatherService } from '@modules/weather/weather.service';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('WeatherController', () => {
  let controller: WeatherController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [WeatherController],
      providers: [AxiosService, WeatherService],
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be able to get a weather by a city', async () => {
    const { weather } = module.get(AxiosService);

    jest.spyOn(weather, 'get').mockImplementationOnce(async () => ({
      status: 200,
      data: {
        weather: [{ main: 'Clear' }],
        main: {
          temp: 20,
        },
        name: 'São Paulo',
      },
    }));

    const { statusCode, message, data } = await controller.getByCity({
      city: 'são paulo',
    });

    expect(statusCode).toBe(200);
    expect(message).toEqual('Success');
    expect(data.temperature).toBe(20);
    expect(data.city).toEqual('São Paulo');
    expect(data.weather).toEqual('Clear');
    expect(data.unit).toEqual('Celsius');
  });
});
