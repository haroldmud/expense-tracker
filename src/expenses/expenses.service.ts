import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ExpenseDocument } from './expenses.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectModel('Expense')
    private readonly ExpenseModel: Model<ExpenseDocument>,
  ) {}

  async create(spending: string, price: number): Promise<ExpenseDocument> {
    const currentTime = new Date();
    const result = new this.ExpenseModel({
      spending,
      price,
      time: currentTime,
    }).save();
    return result;
  }

  async findAll(): Promise<ExpenseDocument[]> {
    return this.ExpenseModel.find();
  }

  async findOne(id: string): Promise<ExpenseDocument> {
    return this.ExpenseModel.findById(id);
  }

  async update(id: string, spending: string, price: number) {
    const result = await this.findOne(id);
    result.spending = spending ?? result.spending;
    result.price = price ?? result.price;
    return result.save();
  }

  async remove(id: string) {
    return this.ExpenseModel.findByIdAndDelete(id);
  }
}
