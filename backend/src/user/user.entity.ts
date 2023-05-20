import { Food } from 'src/food/food.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
export const enum UserType{
  'student',
  'ad'
}
export const enum Gender{
  'male',
  'female'
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber:string;

  @Column({
    type:'varchar'
  })
  username: string;

  @Column()
  gender:Gender

  @Column({
    type:'varchar'
  })
  password: string;

  @Column()
  type: UserType

  @OneToMany(()=>Food,food=>food.publishBy)
  publishFoods:Food[]
}
