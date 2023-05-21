import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

export const enum FoodType{
    'MAINFOOD', // 1
    'NOODLE', // 2 
    'VAGETABALE',
    'MEAL',
    'DRINK',
    'SMALLFOOD',
    "FRUIT"
}
export const enum ISRECTYPE{
  'YES',
  'NO'
}
@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  foodName:string;

  @Column()
  foodAvatarUrl:string;

  @Column()
  foodPrice:number;

  @Column()
  foodType:FoodType;

  @Column()
  saleCount:number;

  @Column()
  isRcm:ISRECTYPE;

  @Column()
  foodDesc:string;
  
  @ManyToOne(()=>User,user=>user.publishFoods)
  publishBy:User
}
