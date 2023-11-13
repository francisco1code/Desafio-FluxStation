import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Supply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  driver: string;

  @Column()
  cpf: string;

  @Column()
  type: string;

  @Column()
  amount: string;

  @Column()
  price: string;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

}

