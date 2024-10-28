import { Module } from '@nestjs/common';
import { UserController } from '../api/controllers/user.controller';
import { UserService } from '../api/services/user.service';
import { UserByIdPipe } from '../api/pipes/user-by-id.pipe';

@Module({
  controllers: [UserController],
  providers: [UserService, UserByIdPipe],
})
export class UserModule {}
