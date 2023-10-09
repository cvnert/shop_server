import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRoleDto } from './dto/patch-role.dto';

@Injectable()
export class RoleService {
  @Inject(PrismaService)
  private prisma: PrismaService;

  //新增角色
  async addRole(name: CreateRoleDto) {
    try {
      const res = await this.prisma.role.create({
        data: {
          name: name.name,
        },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  //修改角色
  async patchRole(id: number, updataRole: UpdateRoleDto) {
    try {
      const res = await this.prisma.role.update({
        where: {
          id: Number(id),
        },
        data: {
          ...updataRole,
        },
      });
      return {
        res,
      };
    } catch (error) {
      console.log(error);
    }
  }
  //删除角色
  async delRole(id: number) {
    try {
      const res = await this.prisma.role.delete({
        where: {
          id: Number(id),
        },
      });
      return {
        res,
      };
    } catch (error) {
      console.log(error);
    }
  }
  //查看所有的角色信息
  async showRole() {
    try {
      const res = await this.prisma.role.findMany();
      return {
        res,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
