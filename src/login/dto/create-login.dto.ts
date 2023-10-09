import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty({
    description: '昵称',
  })
  nickname: string;
  @ApiProperty({
    description: '用户名',
  })
  username: string;
  @ApiProperty({
    description: '密码',
  })
  password: string;
  @ApiProperty({
    description: '邮箱',
  })
  email: string;
  @ApiProperty({
    description: '电话号码',
  })
  phone: string;
  @ApiProperty({
    description: '性别',
  })
  sex: number;
  @ApiProperty({
    description: '头像',
  })
  avatar: string;
}
