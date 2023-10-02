import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetDto } from './create-budget.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {
  @IsString()
  item: string;
  @IsNumber()
  budget: number;
  @IsString()
  category: string;
  @IsString()
  priority: string;
  @IsString()
  description?: string;
}
