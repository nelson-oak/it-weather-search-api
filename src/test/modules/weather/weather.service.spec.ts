import { WeatherService } from '@modules/weather/weather.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherService],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be able to get a weather by a city', async () => {
    const data = await service.getByCity({
      city: 'são paulo',
    });

    expect(data.temperature).toBe(20);
    expect(data.city).toEqual('São Paulo');
    expect(data.weather).toEqual('Clear');
    expect(data.unit).toEqual('Celsius');
  });
});
