import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../../utils';

export class UpdateProjectMemberDto {
  @ApiPropertyOptional({ description: 'Project id of the project member' })
  @IsOptional()
  @IsUUID(null, validationOptionsMsg('Project id must be a UUID'))
    projectId?: string;

  @ApiPropertyOptional({ description: 'User id of the project member' })
  @IsOptional()
  @IsUUID(null, validationOptionsMsg('User id must be a UUID'))
    userId?: string;
}
