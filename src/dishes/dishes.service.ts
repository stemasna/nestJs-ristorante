import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dishes, DishesDocument } from './schemas/dishes.schema';
import { Model } from 'mongoose';
@Injectable()
export class DishesService {
  constructor(
    @InjectModel(Dishes.name) private dishesModel: Model<DishesDocument>,
  ) {}
  addDishes(newDishes: { name: string; price: number }): string {
    const dishesCreated = new this.dishesModel(newDishes);
    dishesCreated.save();
    return 'New dishes added';
  }
  async getAllDishes(): Promise<Array<any>> {
    return this.dishesModel.find();
  }
  // async getDishesById(id: string): Promise<Array<any>> {
  //   return this.dishesModel.findById(id);
  // }
}
