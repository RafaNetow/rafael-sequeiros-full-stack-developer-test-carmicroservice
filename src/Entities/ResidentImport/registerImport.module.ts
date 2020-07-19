import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { Car } from './registerImport.entity';
import { RegisterCarModule } from '../registerCar/register.module';

@Module({
    imports: [TypeOrmModule.forFeature([Car]), RegisterCarModule],
    providers: [CarService],
    controllers: [CarController],
})

export class CarModule { }
