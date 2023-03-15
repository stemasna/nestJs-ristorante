import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Orders, OrdersDocument } from './schemas/orders.schema';
import { Model } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Orders.name) private ordersModel: Model<OrdersDocument>,
  ) {}
  addOrder(orderData: {
    dishesList: Array<{ name: string; price: number }>;
    tableNumber: number;
    deliveryDate: string;
  }): string {
    const newOrder = new this.ordersModel();
    newOrder.listDishes = orderData.dishesList;
    newOrder.tableNumber = orderData.tableNumber;

    newOrder.OrderTotalPrice = orderData.dishesList.reduce(
      (acc, cur) => acc + cur.price,
      0,
    );

    newOrder.creationDate = new Date(Date.now());

    newOrder.save();
    return 'New Order Added';
  }
  async getAllOrders(): Promise<Array<any>> {
    return this.ordersModel.find();
  }
  async searchTableNumber(tableNumber: number): Promise<Array<any>> {
    // console.log(tableNumber);
    // console.log(this.ordersModel.find({ tableNumber: tableNumber }));
    return this.ordersModel.find({ tableNumber: tableNumber });
  }
}
