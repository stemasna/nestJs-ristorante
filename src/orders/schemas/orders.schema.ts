import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema()
export class Orders {
  @Prop()
  listDishes: Array<{ name: string; price: number }>;
  @Prop()
  tableNumber: number;
  @Prop()
  OrderTotalPrice: number;
  @Prop()
  creationDate: Date;
}
export const OrdersSchema = SchemaFactory.createForClass(Orders);
