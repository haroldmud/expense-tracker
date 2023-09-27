import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ require: true })
  username: string;
  @Prop({ require: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
