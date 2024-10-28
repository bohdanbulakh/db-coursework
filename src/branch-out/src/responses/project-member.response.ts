import { ApiProperty } from '@nestjs/swagger';

export class ProjectMemberResponse {
  @ApiProperty({ description: 'Id of the project member' })
    id: string;

  @ApiProperty({ description: 'Project id of the project member' })
    projectId: string;

  @ApiProperty({ description: 'User id of the project member' })
    userId: string;
}
