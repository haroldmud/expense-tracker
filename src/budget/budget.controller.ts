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
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';

@Controller('budget')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post('create')
  create(
    @Body()
    createBudgetDto: CreateBudgetDto,
  ): Promise<BudgetDocument> {
    const { item, budget, category, priority, description } = createBudgetDto;
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
    updateBudgetDtoy: UpdateBudgetDto,
  ): Promise<BudgetDocument> {
    const { item, budget, category, priority, description } = updateBudgetDtoy;
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
