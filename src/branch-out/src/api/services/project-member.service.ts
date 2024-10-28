import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectMemberService {
  constructor (private readonly prisma: PrismaService) {}

  getAll () {
    return this.prisma.projectMember.findMany();
  }

  getById (projectMemberId: string) {
    return this.prisma.projectMember.findUnique({
      where: { id: projectMemberId },
    });
  }

  create (data: Prisma.ProjectMemberUncheckedCreateInput) {
    return this.prisma.projectMember.create({
      data,
    });
  }

  updateById (projectMemberId: string, data: Prisma.ProjectMemberUncheckedUpdateInput) {
    return this.prisma.projectMember.update({
      where: { id: projectMemberId },
      data,
    });
  }

  deleteById (projectMemberId: string) {
    return this.prisma.projectMember.delete({
      where: { id: projectMemberId },
    });
  }
}
