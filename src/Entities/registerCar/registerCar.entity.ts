import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RegisterCar {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  licensePlate: string;

  @Column()
  checkIn: Date;

  @Column()
  checkOut: Date;

  @Column()
  active: boolean;

}
