import { PartialType } from '@nestjs/mapped-types';
import { CreateDebtDto } from './createDebt.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateDebtDto extends PartialType(CreateDebtDto) {
  @IsString()
  id: string;
  @IsString()
  lender: string;
  @IsNumber()
  amount: number;
  @IsString()
  reason?: string;
}
