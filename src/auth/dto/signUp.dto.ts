
export class Budget {
  @isnotemp
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