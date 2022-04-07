import { AxiosService } from '@http/axios/axios.service';
import { WeatherService } from '@modules/weather/weather.service';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [AxiosService, WeatherService],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to get a weather by a city', async () => {
    const { weather } = module.get(AxiosService);

    jest.spyOn(weather, 'get').mockImplementationOnce(async () => ({
      data: {
        weather: [{ main: 'Clear' }],
        main: {
          temp: 20,
        },
        name: 'São Paulo',
      },
    }));

    const data = await service.getByCity({
      city: 'são paulo',
    });

    expect(data.temperature).toBe(20);
    expect(data.city).toEqual('São Paulo');
    expect(data.weather).toEqual('Clear');
    expect(data.unit).toEqual('Celsius');
  });

  it('should be able to get a weather by a city using fahrenheit unit', async () => {
    const { weather } = module.get(AxiosService);

    jest.spyOn(weather, 'get').mockImplementationOnce(async () => ({
      data: {
        weather: [{ main: 'Clear' }],
        main: {
          temp: 68,
        },
        name: 'São Paulo',
      },
    }));

    const data = await service.getByCity({
      city: 'são paulo',
      unit: 'f',
    });

    expect(data.temperature).toBe(68);
    expect(data.city).toEqual('São Paulo');
    expect(data.weather).toEqual('Clear');
    expect(data.unit).toEqual('Fahrenheit');
  });

  it('should be able to get a weather by a city using kelvin unit', async () => {
    const { weather } = module.get(AxiosService);

    jest.spyOn(weather, 'get').mockImplementationOnce(async () => ({
      data: {
        weather: [{ main: 'Clear' }],
        main: {
          temp: 293.15,
        },
        name: 'São Paulo',
      },
    }));

    const data = await service.getByCity({
      city: 'são paulo',
      unit: 'k',
    });

    expect(data.temperature).toBe(293.15);
    expect(data.city).toEqual('São Paulo');
    expect(data.weather).toEqual('Clear');
    expect(data.unit).toEqual('Kelvin');
  });
});
