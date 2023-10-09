import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';

@ApiTags('角色相关')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  //查询全部角色
  @Get()
  @ApiOperation({
    summary: '查询全部角色',
  })
  async showAll() {
    return this.roleService.showRole();
  }

  //新增角色
  @Post()
  @ApiOperation({
    summary: '新增角色',
  })
  async addRole(@Body() name: CreateRoleDto) {
    return this.roleService.addRole(name);
  }

  //修改角色
  @Patch(':id')
  @ApiOperation({
    summary: '修改角色',
  })
  async patchRole(@Param('id') id: number, @Body() name: CreateRoleDto) {
    return this.roleService.patchRole(id, name);
  }

  //删除角色
  @Delete(':id')
  @ApiOperation({
    summary: '删除角色',
  })
  async removeRole(@Param('id') id: number) {
    return this.roleService.delRole(id);
  }
}
