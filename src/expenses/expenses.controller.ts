import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ExpenseDocument } from './expenses.schema';
import { ExpensesService } from './expenses.service';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post('create')
  create(
    @Body()
    createExpenseDto: CreateExpenseDto,
  ): Promise<ExpenseDocument> {
    const { spending, price } = createExpenseDto;
    return this.expensesService.create(spending, price);
  }

  @Get()
  findAll(): Promise<ExpenseDocument[]> {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ExpenseDocument> {
    return this.expensesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateExpenseDto: UpdateExpenseDto,
  ): Promise<ExpenseDocument> {
    const { spending, price } = updateExpenseDto;
    return this.expensesService.update(id, spending, price);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ExpenseDocument> {
    return this.expensesService.remove(id);
  }
}
