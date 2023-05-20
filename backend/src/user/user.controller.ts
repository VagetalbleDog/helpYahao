import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  // 注册用户
  @Post('/register')
  async registerUser(@Body() user:User){
    try{
      const res = await this.userService.create(user);
      return {
        code:201,
        message:'success',
      }
    }catch(e){
      console.log(e);
      return {
        code:500,
        message:'failed'
      }
    }
  }
  // 登录
  @Post('/login')
  async login(@Body() {phoneNumber,password}){
    try{
      const res = await this.userService.login(phoneNumber,password);
      return {
        code:201,
        message:'success',
        user:res
      }
    }catch(e){
      return {
        code:500,
        message:'failed'
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }


  @Post('/update')
  async update( @Body() user: User) {
    try{
      const id = user.id;
      await this.userService.update(id, user);
      return {
        code:201,
        message:'success'
      }
    }catch{
      return {
        code:500,
        message:"failed"
      }
    }
  }
}