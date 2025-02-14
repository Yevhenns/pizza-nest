import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
// import * as jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { CreateUserDto, UserRole } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
    private configService: ConfigService,
  ) {}
  generateToken(user: any): string {
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const payload = { userId: user._id, role: user.role };
    console.log('JWT_SECRET:', jwtSecret);
    return this.jwtService.sign(payload, { secret: jwtSecret });
  }

  async googleSignIn(
    googleToken: string,
  ): Promise<{ token: string; user: User }> {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    // const jwtSecret = process.env.JWT_SECRET as string;

    if (!clientId) {
      throw new Error(
        'Google Client ID is not defined in environment variables',
      );
    }

    const client = new OAuth2Client(clientId);

    if (!googleToken) {
      throw new HttpException('Missing token', HttpStatus.BAD_REQUEST);
    }

    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: clientId,
    });

    const payload = ticket.getPayload();
    if (!payload) {
      throw new HttpException('Invalid Google token', HttpStatus.UNAUTHORIZED);
    }

    let user = await this.userModel.findOne({ email: payload.email });

    if (!user) {
      const newUser: CreateUserDto = {
        picture: payload.picture || '',
        name: payload.name || '',
        email: payload.email || '',
        phoneNumber: '',
        password: '',
        role: UserRole.VISITOR,
        verify: true,
        verificationToken: null,
      };

      const createdUser = new this.userModel(newUser);
      user = await createdUser.save();
    }

    // const userInfo = { userId: user._id, role: user.role };
    // const jwtToken = jwt.sign(userInfo, jwtSecret, { expiresIn: '1h' });
    const jwtToken = this.generateToken(user);

    return { token: jwtToken, user };
  }

  async signIn({ email, password }): Promise<{ token: string; user: User }> {
    // const jwtSecret = process.env.JWT_SECRET as string;
    const user = await this.userModel.findOne({ email: email });

    if (!user) {
      throw new HttpException('Does not exist', HttpStatus.BAD_REQUEST);
    }

    if (user) {
      console.log(user.password);
      console.log(password);
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      console.log(isPasswordValid);

      if (!isPasswordValid) {
        throw new HttpException('wrong password', HttpStatus.UNAUTHORIZED);
      }
      // const userInfo = { userId: user._id, role: user.role };
      // const jwtToken = jwt.sign(userInfo, jwtSecret, { expiresIn: '1h' });
      const jwtToken = this.generateToken(user);

      return { token: jwtToken, user };
    }
  }

  async signUp() {}
}
