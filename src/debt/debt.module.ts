import { Module } from '@nestjs/common';
import { DebtController } from './debt.controller';

@Module({
  controllers: [DebtController]
})
export class DebtModule {}
