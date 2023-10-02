import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  spending: string;
  @IsNumber()
  price: number;
  @IsDate()
  time: Date;
}
