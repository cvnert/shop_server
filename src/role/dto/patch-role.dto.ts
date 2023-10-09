import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiProperty({
    description: '角色名',
    required: true,
  })
  name: string;
}
