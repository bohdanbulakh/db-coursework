import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { CreateUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) {}

  getAll () {
    return this.prisma.user.findMany();
  }

  getById (userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async create ({ password, ...data }: CreateUserDTO) {
    const hashedPassword = await this.hashPassword(password);

    return this.prisma.user.create({
      data: {
        password: hashedPassword,
        ...data,
      },
    });
  }

  async updateById (userId: string, { password, ...data }: UpdateUserDTO) {
    const hashedPassword = password ? await this.hashPassword(password) : undefined;

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  deleteById (userId: string) {
    return this.prisma.user.delete({
      where: { id: userId },
    });
  }

  private async hashPassword (password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }
}
