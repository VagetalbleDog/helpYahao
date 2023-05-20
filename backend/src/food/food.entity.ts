import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(()=>User,user=>user.publishFoods)
  publishBy:User
}
