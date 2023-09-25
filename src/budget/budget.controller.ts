import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDocument } from './budget.schema';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('create')
  create(
    @Body()
    body: {
      item: string;
      budget: number;
      category: string;
      priority: string;
      description: string;
    },
  ): Promise<BudgetDocument> {
    const { item, budget, category, priority, description } = body;
    return this.budgetService.create(
      item,
      budget,
      category,
      priority,
      description,
    );
  }

  @Get()
  findAll(): Promise<BudgetDocument[]> {
    return this.budgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BudgetDocument> {
    return this.budgetService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body()
    Body: {
      item: string;
      budget: number;
      category: string;
      priority: string;
      description: string;
    },
  ): Promise<BudgetDocument> {
    const { item, budget, category, priority, description } = Body;
    return this.budgetService.update(
      id,
      item,
      budget,
      category,
      priority,
      description,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<BudgetDocument> {
    return this.budgetService.remove(id);
  }
}
