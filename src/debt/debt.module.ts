import { Module } from '@nestjs/common';
import { DebtController } from './debt.controller';
import { DebtService } from './debt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DebtSchema } from './debt.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Debt', schema: DebtSchema }])],
  controllers: [DebtController],
  providers: [DebtService],
})
export class DebtModule {}
