import { AxiosService } from '@http/axios/axios.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HelloController } from './hello.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HelloController],
  providers: [AxiosService],
})
export class HelloModule {}
