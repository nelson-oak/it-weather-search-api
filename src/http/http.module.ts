import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HelloModule } from '@use-cases/hello/hello.module';

@Module({
  imports: [ConfigModule.forRoot(), HelloModule],
})
export class HttpModule {}
