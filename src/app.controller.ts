import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Expense } from '@prisma/client';

@Controller('expenses')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all')
  async getExpenses(): Promise<Expense[]>{
    return this.appService.getAllExpenses();
  }

  @Post()
  async addExpense(@Body() body: { amount: number; description: string }): Promise<Expense> {
    const response = await this.appService.createExpense(body.amount, body.description);

    return response;
  }
}
