import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dishes, DishesSchema } from './schemas/dishes.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dishes.name, schema: DishesSchema }]),
  ],
  controllers: [DishesController],
  providers: [DishesService],
})
export class DishesModule {}
