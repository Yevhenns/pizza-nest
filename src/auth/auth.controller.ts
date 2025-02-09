import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Auth')
  @Post('google-sign_in')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Google Sign-In (In progress)',
    description:
      'Endpoint for signing in users via Google authentication. If the user is new, a new account will be created; if the user exists, they will be logged in. Returns a JWT token for authorized requests.',
  })
  googleSignIn() {}

  @ApiTags('Auth')
  @Post('sign_up')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Sign-Up (In progress)',
    description:
      'Endpoint for signing up users. If the user is new, a new account will be created. Returns a JWT token for authorized requests.',
  })
  signUp() {}
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiTags('Auth')
  @Post('sign_in')
  @ApiOperation({
    summary: 'Sign-In (In progress)',
    description:
      'Endpoint for signing in users.If the user exists, they will be logged in. Returns a JWT token for authorized requests.',
  })
  signIn() {}
}
