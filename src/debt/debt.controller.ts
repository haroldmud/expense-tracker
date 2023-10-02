import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DebtService } from './debt.service';
import { CreateDebtDto } from './dto/createDebt.dto';
import { DebtDocument } from './debt.schema';

@Controller('debt')
export class DebtController {
  constructor(private readonly debtService: DebtService) {}

  @Post('create')
  async create(
    @Body()
    createDebtDto: CreateDebtDto,
  ): Promise<DebtDocument> {
    const { lender, amount, reason } = createDebtDto;
    return this.debtService.create(lender, amount, reason);
  }

  @Get()
  async findAll(): Promise<DebtDocument> {
    
  }
}
