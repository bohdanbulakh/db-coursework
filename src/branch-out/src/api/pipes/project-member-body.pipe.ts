import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';
import { PrismaService } from '../../database/prisma.service';
import { UpdateProjectMemberDto } from '../dtos/update-project-member.dto';
import { UserAlreadyInProjectException } from '../../exceptions/user-already-in-project.exception';

@Injectable()
export class ProjectMemberBodyPipe implements PipeTransform {
  constructor (private readonly prisma: PrismaService) {}

  async transform (body: UpdateProjectMemberDto): Promise<any> {
    if (body.userId) {
      const user = await this.prisma.user.findUnique({
        where: { id: body.userId },
      });

      if (!user) throw new InvalidEntityIdException('User');
    }

    if (body.projectId) {
      const project =  await this.prisma.project.findUnique({
        where: { id: body.projectId },
      });

      if (!project) throw new InvalidEntityIdException('Project');
    }

    if (body.userId && body.projectId) {
      const projectMember = await this.prisma.projectMember.findFirst({
        where: {
          userId: body.userId,
          projectId: body.projectId,
        },
      });

      if (projectMember) throw new UserAlreadyInProjectException();
    }

    return body;
  }
}
