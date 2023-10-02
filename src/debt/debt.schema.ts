import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DebtDocument = Document & Debt;

@Schema()
export class Debt {
  @Prop({ require: true })
  lender: string;
  @Prop({ require: true })
  amount: number;
  @Prop()
  reason?: string;
}

export const DebtSchema = SchemaFactory.createForClass(Debt);
