import { IsNumber, IsString } from 'class-validator';

export class CreateBudgetDto {
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
