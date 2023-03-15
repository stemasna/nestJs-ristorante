import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  dishesService: any;
  constructor(private readonly ordersService: OrdersService) {}
  @Post('/add')
  postBody(
    @Body()
    body: {
      dishesList: Array<{ name: string; price: number }>;
      tableNumber: number;
      deliveryDate: string;
    },
  ): string {
    return this.ordersService.addOrder(body);
  }
  @Get('/')
  findAll() {
    return this.ordersService.getAllOrders();
  }
  @Get('/tableNumber/:tableNumber')
  async searchTableNumber(@Param() param): Promise<Array<any>> {
    return this.ordersService.searchTableNumber(param.tableNumber);
  }
}
