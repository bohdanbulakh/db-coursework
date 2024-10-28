import { IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { validationOptionsMsg } from '../../utils';

export class CreateUserDTO {
  @ApiProperty({
    description: 'Username of the user',
  })
  @IsNotEmpty(validationOptionsMsg('Username cannot be empty'))
  @IsString(validationOptionsMsg('Username must be a string'))
  @MinLength(2, validationOptionsMsg('Username is too short (min: 2)'))
  @MaxLength(40, validationOptionsMsg('Username is too long (max: 40)'))
    username: string;

  @ApiProperty({
    description: 'Email of the user',
  })
  @IsNotEmpty(validationOptionsMsg('Email cannot be empty'))
  @IsEmail({}, validationOptionsMsg('Email must be an email'))
    email: string;

  @ApiProperty({
    description: 'Password of the user',
  })
  @IsNotEmpty(validationOptionsMsg('Password cannot be empty'))
  @IsString(validationOptionsMsg('Password must be a string'))
  @MinLength(8, validationOptionsMsg('Password is too short (min: 8)'))
    password: string;

  @ApiProperty({
    description: 'First name of the user',
  })
  @IsNotEmpty(validationOptionsMsg('First name cannot be empty'))
  @IsString(validationOptionsMsg('First name must be a string'))
  @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
  @MaxLength(40, validationOptionsMsg('First name is too long (max: 40)'))
    firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
  })
  @IsNotEmpty(validationOptionsMsg('Last name cannot be empty'))
  @IsString(validationOptionsMsg('Last name must be a string'))
  @MinLength(2, validationOptionsMsg('Last name is too short (min: 2)'))
  @MaxLength(40, validationOptionsMsg('Last name is too long (max: 40)'))
    lastName: string;

  @ApiPropertyOptional({
    description: 'Avatar link of the user',
  })
  @IsUrl({}, validationOptionsMsg('Avatar must be a URL'))
    avatar?: string;
}
