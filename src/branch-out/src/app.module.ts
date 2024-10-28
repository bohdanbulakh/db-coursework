import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma.module';
import { UserModule } from './modules/user.module';
import { ProjectMemberModule } from './modules/project-member.module';

@Module({
  imports: [PrismaModule, UserModule, ProjectMemberModule],
})
export class AppModule {}
