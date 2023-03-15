import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  // Param,
  //Delete,
} from '@nestjs/common';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Post('/add')
  postBody(@Body() body: { name: string; price: number }): string {
    return this.dishesService.addDishes(body);
  }

  @Get('/')
  findAll() {
    return this.dishesService.getAllDishes();
  }

  // @Get(':id')
  // findOne(@Param('id') id) {
  //   return this.dishesService.getDishesById(+id);
  // }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateDishDto) {
  //     return this.dishesService.update(+id, updateDishDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.dishesService.remove(+id);
  //   }
}
