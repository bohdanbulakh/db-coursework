import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { validationOptionsMsg } from '../../utils';

export class UpdateUserDTO {
  @ApiPropertyOptional({
    description: 'Username of the user',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('Username must be a string'))
  @MinLength(2, validationOptionsMsg('Username is too short (min: 2)'))
  @MaxLength(40, validationOptionsMsg('Username is too long (max: 40)'))
    username?: string;

  @ApiPropertyOptional({
    description: 'Email of the user',
  })
  @IsOptional()
  @IsEmail({}, validationOptionsMsg('Email must be an email'))
    email?: string;

  @ApiPropertyOptional({
    description: 'Password of the user',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('Password must be a string'))
  @MinLength(8, validationOptionsMsg('Password is too short (min: 8)'))
    password?: string;

  @ApiPropertyOptional({
    description: 'First name of the user',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('First name must be a string'))
  @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
  @MaxLength(40, validationOptionsMsg('First name is too long (max: 40)'))
    firstName?: string;

  @ApiPropertyOptional({
    description: 'Last name of the user',
  })
  @IsOptional()
  @IsString(validationOptionsMsg('Last name must be a string'))
  @MinLength(2, validationOptionsMsg('Last name is too short (min: 2)'))
  @MaxLength(40, validationOptionsMsg('Last name is too long (max: 40)'))
    lastName?: string;

  @ApiPropertyOptional({
    description: 'Avatar link of the user',
  })
  @IsOptional()
  @IsUrl({}, validationOptionsMsg('Avatar must be a URL'))
    avatar?: string;
}
