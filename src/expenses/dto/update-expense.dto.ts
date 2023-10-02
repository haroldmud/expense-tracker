import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateExpenseDto {
  @IsString()
  spending: string;
  @IsNumber()
  price: number;
  @IsDate()
  time: Date;
}
