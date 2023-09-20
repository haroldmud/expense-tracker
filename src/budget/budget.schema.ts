import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BudgetDocument = Budget & Document;

@Schema()
export class Budget {
  @Prop({ required: true })
  item: string;
  @Prop({ required: true })
  budget: number;
  @Prop({ required: true })
  category: string;
  @Prop({ required: true })
  priority: string;
  @Prop()
  description?: string;
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
