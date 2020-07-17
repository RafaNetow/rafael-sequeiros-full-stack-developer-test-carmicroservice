import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  licensePlate: string;

  @Column()
  typeOfCar: string
  
}
