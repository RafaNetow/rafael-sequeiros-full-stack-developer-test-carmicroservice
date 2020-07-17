import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './car.entity';
import { Type } from './typeCars';
import { RegisterCarService } from '../registerCar/register.service';
import { CreateRegisterCarDto } from '../registerCar/dto/create-register.dto'
import { type } from 'os';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    private readonly registerCarService: RegisterCarService,
  ) {}

 
  async checkInCar(createCarnDto: CreateCarDto): Promise<Car> {
    const newCar = new Car();
    newCar.licensePlate = createCarnDto.licensePlate;
    newCar.typeOfCar = createCarnDto.typeOfCar;
    const newRegister = new CreateRegisterCarDto();
    newRegister.active = true;
    newRegister.checkIn = createCarnDto.checkIn;
    newRegister.checkOut = new Date();
    newRegister.licensePlate = newRegister.licensePlate;
    this.registerCarService.checkInRegister(newRegister)
    return this.carRepository.save(newCar);
  }

  async checkOutCar(licensePlate : string) : Promise <void> {
   let registerCar = await this.registerCarService.findOne(licensePlate);
  }

  async setOficialCar(licensePlate: string) : Promise <Car> {
    let car = await this.carRepository.findOne({
      where: [
        { licensePlate: licensePlate }
      ]
    });

    if ( car !== null ) {
         car.typeOfCar = Type.OFFICAL_CAR;
         return this.carRepository.save(car);
    }
    return null;
  }

  async setResidentCar(licensePlate: string): Promise<Car> {
    let car = await this.carRepository.findOne({
      where: [
        { licensePlate: licensePlate }
      ]
    });

    if (car !== null) {
      car.typeOfCar = Type.RESIDENT_CAR;
      return this.carRepository.save(car);
    }
    return null;
  }

  async resetMonth () : Promise <void> {
    return null;
  }
  
  async update(car: Car): Promise<Car> {
    return await this.carRepository.save(car);
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findByPlaca(placa: string): Promise<Car> {
    return this.carRepository.findOne({where : [
      { licensePlate: placa } 
    ]});
  }

  async remove(id: string): Promise<void> {
    await this.carRepository.delete(id);
  }
}