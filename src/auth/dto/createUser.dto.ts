import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum UserRole {
  ADMIN = 'Admin',
  VISITOR = 'Visitor',
}

export class GoogleTokenDto {
  @ApiProperty({ example: 'dflkjsdklfjoi...', minLength: 1, required: true })
  @IsString()
  @MinLength(1, { message: 'title min length: 1' })
  token: string;
}

export class LoginDto {
  @ApiProperty({
    example: 'asd@gmail.com',
    minLength: 2,
    required: true,
  })
  @IsString()
  @MinLength(3, { message: 'dimension min length: 3' })
  email: string;

  @ApiProperty({
    example: 'qwert1111',
    description: 'password',
    required: true,
  })
  @IsString()
  password: string;
}

export class CreateUserDto {
  @ApiProperty({ example: 'www.', minLength: 3, maxLength: 20, required: true })
  @IsString()
  @MinLength(3, { message: 'title min length: 3' })
  @MaxLength(20, { message: 'title max length: 20' })
  picture: string;

  @ApiProperty({ example: 'Alex', minLength: 3, maxLength: 50, required: true })
  @IsString()
  @MinLength(3, { message: 'description min length: 3' })
  @MaxLength(50, { message: 'description max length: 50' })
  name: string;

  @ApiProperty({
    example: 'asd@gmail.com',
    minLength: 2,
    maxLength: 10,
    required: true,
  })
  @IsString()
  @MinLength(3, { message: 'dimension min length: 3' })
  @MaxLength(50, { message: 'dimension max length: 50' })
  email: string;

  @ApiProperty({
    example: 'qwerty1',
    description: 'photo must be URL',
    required: true,
  })
  @IsUrl({}, { message: 'photo must be URL' })
  phoneNumber: string;

  @ApiProperty({
    example: 'qwert1111',
    description: 'password',
    required: true,
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'Visitor',
    description: 'category must be one of: Піца, Закуски, Напої',
    enum: UserRole,
    required: true,
  })
  @IsEnum(UserRole, {
    message: 'category must be one of: Піца, Закуски, Напої',
  })
  role: UserRole;

  @ApiProperty({
    example: 'qwerty1',
    description: 'photo must be URL',
    required: true,
  })
  @IsBoolean({ message: 'photo must be URL' })
  verify: true | false;

  @ApiProperty({
    example: 'qwerty1',
    description: 'photo must be URL',
    required: true,
  })
  @IsUrl({}, { message: 'photo must be URL' })
  verificationToken: null | string;
}
