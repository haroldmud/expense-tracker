import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './budget/budget.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    BudgetModule,
    ExpensesModule,
    MongooseModule.forRoot(
      'mongodb+srv://budget:DUTt0i2obN6cz2X9@xo.6cb5vsr.mongodb.net/',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
