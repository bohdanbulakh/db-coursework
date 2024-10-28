import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../../exceptions/invalid-entity-id.exception';
import { UserService } from '../services/user.service';

@Injectable()
export class UserByIdPipe implements PipeTransform {
  constructor (private readonly userService: UserService) {}

  async transform (id: string): Promise<any> {
    const user = await this.userService.getById(id);
    if (!user) {
      throw new InvalidEntityIdException('User');
    }

    return user.id;
  }
}
