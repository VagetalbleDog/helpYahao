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

  async findAll(): Promise<Food[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Food> {
    return this.userRepository.findOne({ where: { id } });
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
