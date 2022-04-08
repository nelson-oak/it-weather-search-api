import { AxiosService } from '@http/axios/axios.service';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

describe('AxiosService', () => {
  let service: AxiosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [AxiosService],
    }).compile();

    service = module.get<AxiosService>(AxiosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
