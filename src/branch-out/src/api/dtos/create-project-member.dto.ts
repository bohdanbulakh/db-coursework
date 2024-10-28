import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../../utils';

export class CreateProjectMemberDto {
  @ApiProperty({ description: 'Project id of the project member' })
  @IsNotEmpty(validationOptionsMsg('Project id cannot be empty'))
  @IsUUID(null, validationOptionsMsg('Project id must be a UUID'))
    projectId: string;

  @ApiProperty({ description: 'User id of the project member' })
  @IsNotEmpty(validationOptionsMsg('User id cannot be empty'))
  @IsUUID(null, validationOptionsMsg('User id must be a UUID'))
    userId: string;
}
