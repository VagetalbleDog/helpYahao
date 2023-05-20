import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export const enum FoodType{
    'MAINFOOD',
    'NOODLE',
    'VAGETABALE',
    'MEAL',
    'DRINK',
    'SMALLFOOD',
    "FRUIT"
}
@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  foodName:string

  @Column()
  foodAvatarUrl:string

  @Column()
  foodPrice:number

  @Column()
  foodType:FoodType

  @Column()
  saleCount:number
  
  @ManyToOne(()=>User,user=>user.publishFoods)
  publishBy:User
}
