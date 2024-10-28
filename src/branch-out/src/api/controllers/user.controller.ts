import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserByIdPipe } from '../pipes/user-by-id.pipe';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { UserResponse } from '../../responses/user.response';

@ApiTags('User')
@Controller('/users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get all users',
    description: 'Endpoint for getting all users',
  })
  @ApiOkResponse({
    type: [UserResponse],
  })
  @Get()
  getAll () {
    return this.userService.getAll();
  }

  @ApiOperation({
    summary: 'Get user by id',
    description: 'Endpoint for getting users by id',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user to get',
  })
  @Get('/:id')
  get (@Param('id', UserByIdPipe) id: string) {
    return this.userService.getById(id);
  }

  @ApiOperation({
    summary: 'Create user',
    description: 'Endpoint for creating users',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidBodyException:
      Username cannot be empty
      Username must be a string
      Username is too short (min: 2)
      Username is too long (max: 40)
      Email cannot be empty
      Email must be an email
      Password cannot be empty
      Password must be a string
      Password is too short (min: 8)
      First name cannot be empty
      First name must be a string
      First name is too short (min: 2)
      Last name cannot be empty
      Last name must be a string
      Last name is too short (min: 2)
      Last name is too long (max: 40)
      Avatar must be a URL`,
  })
  @Post()
  create (@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @ApiOperation({
    summary: 'Update user by id',
    description: 'Endpoint for updating users by id',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found

    InvalidBodyException:
      Username must be a string
      Username is too short (min: 2)
      Username is too long (max: 40)
      Email must be an email
      Password must be a string
      Password is too short (min: 8)
      First name must be a string
      First name is too short (min: 2)
      Last name must be a string
      Last name is too short (min: 2)
      Last name is too long (max: 40)
      Avatar must be a URL`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user to update',
  })
  @Patch('/:id')
  update (
    @Param('id', UserByIdPipe) id: string,
    @Body() body: UpdateUserDTO,
  ) {
    return this.userService.updateById(id, body);
  }

  @ApiOperation({
    summary: 'Create user',
    description: 'Endpoint for creating users',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user to delete',
  })
  @Delete('/:id')
  delete (@Param('id', UserByIdPipe) id: string) {
    return this.userService.deleteById(id);
  }
}
