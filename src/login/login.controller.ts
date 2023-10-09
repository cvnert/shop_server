import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { LoginDto } from './dto/login.dto';
import { Inject } from '@nestjs/common/decorators';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('登录注册')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('login')
  async login(@Body() loginUser: LoginDto) {
    const user = await this.loginService.login(loginUser);
    const token = this.jwtService.sign({
      user: {
        username: user.username,
        token: user.userId,
      },
    });
    return {
      token,
    };
  }

  @Post('register')
  async register(@Body() user: CreateLoginDto) {
    return this.loginService.register(user);
  }
}
