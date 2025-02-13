import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from '../dto/createUser.dto';

export type ProductDocument = HydratedDocument<User>;

@Schema({ versionKey: false })
export class User {
  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: number;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
