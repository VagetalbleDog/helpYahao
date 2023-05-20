import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { Food } from './food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class foodModule {}
