import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly userRepository: Repository<Food>,
  ) {}

  async find(query:any): Promise<Food[]> {
    return this.userRepository.find({where:query,relations:['publishBy']});
  }

  async findOne(id: number): Promise<Food> {
    return this.userRepository.findOne({ where: { id } ,relations:['publishBy']});
  }

  async create(user: Food): Promise<Food> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: Food): Promise<Food> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
