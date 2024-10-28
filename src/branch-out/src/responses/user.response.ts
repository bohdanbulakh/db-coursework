import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    description: 'Id of the user',
  })
    id: string;

  @ApiProperty({
    description: 'Username of the user',
  })
    username: string;

  @ApiProperty({
    description: 'Email of the user',
  })
    email: string;

  @ApiProperty({
    description: 'Password of the user',
  })
    password: string;

  @ApiProperty({
    description: 'First name of the user',
  })
    firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
  })
    lastName: string;

  @ApiProperty({
    description: 'Avatar link of the user',
  })
    avatar?: string;
}
