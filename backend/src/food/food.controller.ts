import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { Food } from './food.entity';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly FoodService: FoodService) {}

  @Get()
  async findAll(@Query() query): Promise<Food[]> {
    return this.FoodService.find(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Food> {
    return this.FoodService.findOne(id);
  }

  @Post('/create')
  async create(@Body() Food: Food): Promise<Food> {
    return this.FoodService.create(Food);
  }

  @Post('/update/:id')
  async update(@Param('id') id: number, @Body() Food: Food): Promise<Food> {
    return this.FoodService.update(id, Food);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.FoodService.delete(id);
  }
}