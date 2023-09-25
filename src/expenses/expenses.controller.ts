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

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post('create')
  create(
    @Body()
    body: {
      spending: string;
      price: number;
    },
  ): Promise<ExpenseDocument> {
    const { spending, price } = body;
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
    Body: {
      spending: string;
      price: number;
      time: Date;
    },
  ): Promise<ExpenseDocument> {
    const { spending, price } = Body;
    return this.expensesService.update(id, spending, price);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<ExpenseDocument> {
    return this.expensesService.remove(id);
  }
}
