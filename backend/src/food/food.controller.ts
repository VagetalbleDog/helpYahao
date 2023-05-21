import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { Food } from './food.entity';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly FoodService: FoodService) { }

  @Get()
  async findAll(@Query() query): Promise<Food[]> {
    return this.FoodService.find(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Food> {
    return this.FoodService.findOne(id);
  }

  @Post('/create')
  async create(@Body() food: Food) {
    try {
      const res = await this.FoodService.create(food);
      return {
        code: 201,
        message: 'success',
        id: res.id
      }
    }
    catch (e){
      console.log(e)
      return {
        code: 500,
        message: 'failed'
      }
    }
  }

  @Get('/detail/:id')
  async detail(@Param() { id }) {
    try {
      const res = await this.FoodService.findOne(id);
      return {
        code: 200,
        data: res
      }
    } catch {
      return {
        code: 500
      }
    }
  }

  @Post('/update/:id')
  async update(@Param('id') id: number, @Body() Food: Food) {
    try {
      const res = await this.FoodService.update(id, Food);
      return {
        code: 201
      }
    } catch {
      return {
        code: 500
      }
    }
  }

  @Post('/delete/:id')
  async delete(@Param('id') id: number) {
    try {
      const res = await this.FoodService.delete(id)
      return {
        code: 201
      }
    } catch {
      return {
        code: 500
      }
    }
  }
}