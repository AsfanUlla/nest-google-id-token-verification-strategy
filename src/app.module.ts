import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
