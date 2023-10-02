import { IsNumber, IsString } from 'class-validator';

export class UpdateExpenseDto {
  @IsString()
  spending: string;
  @IsNumber()
  price: number;
}
