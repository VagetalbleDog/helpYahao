import { Food } from 'src/food/food.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
export const enum UserType{
  'student',
  'ad'
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type:'varchar'
  })
  username: string;
  @Column({
    type:'varchar'
  })
  nickname: string;

  @Column({
    type:'varchar'
  })
  password: string;

  @Column()
  type: UserType

  @OneToMany(()=>Food,food=>food.publishBy)
  publishFoods:Food[]
}
