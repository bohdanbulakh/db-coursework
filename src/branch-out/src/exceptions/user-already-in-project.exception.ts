import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyInProjectException extends HttpException {
  constructor () {
    super(`User is already member of this project`, HttpStatus.BAD_REQUEST);
  }
}
