import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';
import { ProjectMemberService } from '../services/project-member.service';

@Injectable()
export class ProjectMemberByIdPipe implements PipeTransform {
  constructor (private readonly projectMemberService: ProjectMemberService) {}

  async transform (id: string): Promise<any> {
    const projectMember = await this.projectMemberService.getById(id);
    if (!projectMember) {
      throw new InvalidEntityIdException('Project member');
    }

    return projectMember.id;
  }
}
