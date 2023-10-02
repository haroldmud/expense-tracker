import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DebtDocument } from './debt.schema';
import { Model } from 'mongoose';

@Injectable()
export class DebtService {
  constructor(
    @InjectModel('Debt')
    private readonly DebtModel: Model<DebtDocument>,
  ) {}

  async create(
    lender: string,
    amount: number,
    reason?: string,
  ): Promise<DebtDocument> {
    const result = new this.DebtModel({ lender, amount, reason });
    return await result.save();
  }

  async findAll(): Promise<DebtDocument[]> {
    return this.DebtModel.find();
  }

  async findOne(id: string): Promise<DebtDocument> {
    return this.DebtModel.findById(id);
  }

  async update(
    id: string,
    lender: string,
    amount: number,
    reason?: string,
  ): Promise<DebtDocument> {
    const updateOne = await this.findOne(id);
    updateOne.lender = lender ?? updateOne.lender;
    updateOne.amount = amount ?? updateOne.amount;
    updateOne.reason = reason ?? updateOne.reason;
    return updateOne;
  }

  async delete(id: string): Promise<DebtDocument> {
    return this.DebtModel.findByIdAndRemove(id);
  }
}
