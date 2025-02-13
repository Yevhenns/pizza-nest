import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GoogleTokenDto, LoginDto } from './dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Auth')
  @Post('google-sign_in')
  @ApiOperation({
    summary: 'Google Sign-In (In progress)',
    description:
      'Endpoint for signing in users via Google authentication. If the user is new, a new account will be created; if the user exists, they will be logged in. Returns a JWT token for authorized requests.',
  })
  async googleSignIn(@Body() googleToken: GoogleTokenDto) {
    if (!googleToken) {
      throw new HttpException('Missing token', HttpStatus.BAD_REQUEST);
    }

    const { user, token } = await this.authService.googleSignIn(
      googleToken.token,
    );

    if (!user) {
      throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);
    }

    return { success: true, token, user };
  }

  // @ApiTags('Auth')
  // @Post('sign_in')
  // @ApiOperation({
  //   summary: 'Sign-In (In progress)',
  //   description:
  //     'Endpoint for signing in users.If the user exists, they will be logged in. Returns a JWT token for authorized requests.',
  // })
  // async signIn(@Body() dto: LoginDto) {
  //   if (!dto.email || !dto.password) {
  //     throw new HttpException(
  //       'Missing email or password',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }

  //   const { user, token } = await this.authService.signIn(
  //     dto.email,
  //     dto.password,
  //   );

  //   if (!user) {
  //     throw new HttpException('Authentication failed', HttpStatus.UNAUTHORIZED);
  //   }

  //   return { success: true, token, user };
  // }

  @ApiTags('Auth')
  @Post('sign_up')
  @ApiOperation({
    summary: 'Sign-Up (In progress)',
    description:
      'Endpoint for signing up users. If the user is new, a new account will be created. Returns a JWT token for authorized requests.',
  })
  signUp() {}
}
