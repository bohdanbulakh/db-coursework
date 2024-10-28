import { Module } from '@nestjs/common';
import { ProjectMemberController } from '../api/controllers/project-member.controller';
import { ProjectMemberService } from '../api/services/project-member.service';
import { ProjectMemberByIdPipe } from '../api/pipes/project-member-by-id.pipe';
import { ProjectMemberBodyPipe } from '../api/pipes/project-member-body.pipe';

@Module({
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService, ProjectMemberByIdPipe, ProjectMemberBodyPipe],
})
export class ProjectMemberModule {}
