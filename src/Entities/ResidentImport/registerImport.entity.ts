import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RegisterImport {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    licensePlate: string;

    @Column()
    currentImport: Number

}
