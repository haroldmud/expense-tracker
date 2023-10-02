import { Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DebtService } from './debt.service';
import { CreateDebtDto } from './dto/createDebt.dto';
import { DebtDocument } from './debt.schema';
import { UpdateDebtDto } from './dto/updateDebt.dto';

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
  async findAll(): Promise<DebtDocument[]> {
    return this.debtService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string,
  ): Promise<DebtDocument> {
    return this.debtService.findOne(id);
  }

  @Put('update/:id')
  async update(
    @Param('id') id: string,
    @Body()
    updateDebtDto: UpdateDebtDto,
  ): Promise<DebtDocument> {
    const { lender, amount, reason } = updateDebtDto;
    return this.debtService.update(id, lender, amount, reason);
  }

  @Delete(':id')
  async Delete(
    @Param('id')
    id: string,
  ): Promise<DebtDocument> {
    return this.debtService.delete(id);
  }
}
