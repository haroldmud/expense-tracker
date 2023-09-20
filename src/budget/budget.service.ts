import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BudgetDocument } from './budget.schema';
import { Model } from 'mongoose';

@Injectable()
export class BudgetService {
  constructor(
    @InjectModel('Budget') private readonly BudgetModel: Model<BudgetDocument>,
  ) {}

  async create(
    item: string,
    budget: number,
    category: string,
    priority: string,
    description?: string,
  ): Promise<BudgetDocument> {
    const newBudget = new this.BudgetModel({
      item,
      budget,
      category,
      priority,
      description,
    });
    const result = await newBudget.save();
    return result;
  }

  async findAll(): Promise<BudgetDocument[]> {
    return this.BudgetModel.find();
  }

  async findOne(id: string): Promise<BudgetDocument> {
    return this.BudgetModel.findById(id);
  }

  async update(
    id: string,
    item: string,
    budget: number,
    category: string,
    priority: string,
    description?: string,
  ): Promise<any> {
    const updateOne = await this.findOne(id);

    updateOne.item = item ?? updateOne.item;
    updateOne.budget = budget ?? updateOne.budget;
    updateOne.category = category ?? updateOne.category;
    updateOne.priority = priority ?? updateOne.priority;
    updateOne.description = description ?? updateOne.description;

    return updateOne.save();
  }

  async remove(id: string): Promise<BudgetDocument> {
    return this.BudgetModel.findByIdAndRemove(id);
  }
}
