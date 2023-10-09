import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    description: '角色名',
    required: true,
  })
  name: string;
}
