import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop({ required: true })
  spending: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  time: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
