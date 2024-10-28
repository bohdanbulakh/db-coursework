import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProjectMemberService } from '../services/project-member.service';
import { ProjectMemberResponse } from '../../responses/project-member.response';
import { ProjectMemberByIdPipe } from '../pipes/project-member-by-id.pipe';
import { UpdateProjectMemberDto } from '../dtos/update-project-member.dto';
import { CreateProjectMemberDto } from '../dtos/create-project-member.dto';
import { ProjectMemberBodyPipe } from '../pipes/project-member-body.pipe';

@ApiTags('Project Member')
@Controller('/projectMembers')
export class ProjectMemberController {
  constructor (private readonly projectMemberService: ProjectMemberService) {}

  @ApiOperation({
    summary: 'Get all project members',
    description: 'Endpoint for getting all project members',
  })
  @ApiOkResponse({
    type: [ProjectMemberResponse],
  })
  @Get()
  getAll () {
    return this.projectMemberService.getAll();
  }

  @ApiOperation({
    summary: 'Get project member by id',
    description: 'Endpoint for getting project members by id',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Project member with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the project member to get',
  })
  @Get('/:id')
  get (@Param('id', ProjectMemberByIdPipe) id: string) {
    return this.projectMemberService.getById(id);
  }

  @ApiOperation({
    summary: 'Create project member',
    description: 'Endpoint for creating project members',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found
      Project with such id not found
    
    InvalidBodyException:
      Project id cannot be empty
      Project id must be a UUID
      User id cannot be empty
      User id must be a UUID

    UserAlreadyInProjectException:
      User is already member of this project`,
  })
  @Post()
  create (@Body(ProjectMemberBodyPipe) body: CreateProjectMemberDto) {
    return this.projectMemberService.create(body);
  }

  @ApiOperation({
    summary: 'Update project member by id',
    description: 'Endpoint for updating project members by id',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Project member with such id not found
      User with such id not found
      Project with such id not found

    InvalidBodyException:
      Project id must be a UUID
      User id must be a UUID

    UserAlreadyInProjectException:
      User is already member of this project`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the project member to update',
  })
  @Patch('/:id')
  update (
    @Param('id', ProjectMemberByIdPipe) id: string,
    @Body(ProjectMemberBodyPipe) body: UpdateProjectMemberDto,
  ) {
    return this.projectMemberService.updateById(id, body);
  }

  @ApiOperation({
    summary: 'Create project member',
    description: 'Endpoint for creating project members',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      project member with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the project member to delete',
  })
  @Delete('/:id')
  delete (@Param('id', ProjectMemberByIdPipe) id: string) {
    return this.projectMemberService.deleteById(id);
  }
}
