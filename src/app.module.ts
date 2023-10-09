import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    LoginModule,
    JwtModule.register({
      global: true,
      secret: 'cvnert',
      signOptions: {
        expiresIn: '1d',
      },
    }),
    RoleModule,
    UserModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
