import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AxiosService } from './axios.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [AxiosService],
  exports: [AxiosService],
})
export class AxiosModule {}
