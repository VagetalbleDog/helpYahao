import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({
    type:'int'
  })
  type: number
}
