import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({where:{id},relations:['publishFoods']})
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  // 登录用户
  async login(phoneNumber:string,password:string){
    const user = await this.userRepository.findOneBy({phoneNumber:phoneNumber});
    if(!user){
      throw new Error()
    }
    if(user.password !== password){
      throw new Error()
    }
    return user
  }
  async update(id: number, user: User): Promise<User> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
