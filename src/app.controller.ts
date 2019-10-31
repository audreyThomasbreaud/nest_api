import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() body: any) {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
