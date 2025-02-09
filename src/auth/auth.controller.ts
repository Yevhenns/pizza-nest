import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('Auth')
  @Post('google-signin')
  @ApiOperation({
    summary: 'Google Sign-In',
    description:
      'Endpoint for signing in users via Google authentication. If the user is new, a new account will be created; if the user exists, they will be logged in. Returns a JWT token for authorized requests.',
  })
  googleSignUp() {}
}
