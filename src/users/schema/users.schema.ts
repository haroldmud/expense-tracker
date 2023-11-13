import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema({
  timestamps: true,
})
export class Users {
  @Prop({ unique: [true, 'this username already exists'] })
  username: string;
  @Prop({ unique: [true, 'this username already exists'] })
  email: string;
  @Prop({ require: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
