import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/profile')
  @UseGuards(AuthGuard('jwt'))
  user_data(@Req() req) {
    console.log(req.user);
    return {"user_name": req.user.name, "email": req.user.email};
  }
}
