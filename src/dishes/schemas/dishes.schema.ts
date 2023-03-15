import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DishesDocument = HydratedDocument<Dishes>;

@Schema()
export class Dishes {
  @Prop()
  name: string;

  @Prop()
  price: number;
}
export const DishesSchema = SchemaFactory.createForClass(Dishes);
