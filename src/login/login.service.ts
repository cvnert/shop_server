import { Inject, Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  @Inject(PrismaService)
  private prisma: PrismaService;

  //登录
  async login(user: LoginDto) {
    try {
      const userInfo = await this.prisma.user.findFirst({
        where: {
          ...user,
        },
      });
      return userInfo;
    } catch (error) {
      console.log(error);
    }
  }

  //注册
  async register(user: CreateLoginDto) {
    try {
      const userInfo = await this.prisma.user.create({
        data: {
          ...user,
        },
      });
      return {
        userInfo,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
