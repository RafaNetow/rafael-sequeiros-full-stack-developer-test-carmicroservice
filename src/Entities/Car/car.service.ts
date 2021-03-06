7



import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './car.entity';
import { Type } from './typeCars';
import { RegisterCarService } from '../registerCar/register.service';
import { CreateRegisterCarDto } from '../registerCar/dto/create-register.dto'
import { type } from 'os';
import { RegisterCar } from '../registerCar/registerCar.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    private readonly registerCarService: RegisterCarService,
  ) { }


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

  async checkOutCar(licensePlate: string): Promise<Object> {
    let registerCar = await this.registerCarService.findOne(licensePlate);
    let car = await this.carRepository.findOne(licensePlate);

    if (car.typeOfCar === Type.OFFICAL_CAR) {
      registerCar.active = false;
      let outDay = new Date()
      registerCar.checkOut = outDay;
      return await this.registerCarService.update(registerCar)
    } else if (car.typeOfCar === Type.RESIDENT_CAR)  {
      var diff = (registerCar.checkIn.getTime() - new Date().getTime()) / 1000;
      diff /= 60;
     return  Math.abs(Math.round(diff))
    } else if (car.typeOfCar === Type.NO_RESIDENT_CAR) {
      var diff = (registerCar.checkIn.getTime() - new Date().getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff))*0.05;
    }

    return null;

}

async setOficialCar(licensePlate: string) : Promise < Car > {
  let car = await this.carRepository.findOne({
    where: [
      { licensePlate: licensePlate }
    ]
  });

  if(car !== null ) {
  car.typeOfCar = Type.OFFICAL_CAR;
  return this.carRepository.save(car);
}
return null;
  }

475 async setResidentCar(licensePlate: string): Promise < Car > {
  let car = await this.carRepository.findOne({
    where: [
      { licensePlate: licensePlate }
    ]
  });

  if(car !== null) {
  car.typeOfCar = Type.RESIDENT_CAR;
  return this.carRepository.save(car);
}
return null;
  }

async resetMonth() : Promise < void> {
  return null;
}

async update(car: Car): Promise < Car > {
  return await this.carRepository.save(car);
}

async findAll(): Promise < Car[] > {
  return this.carRepository.find();
}

findByPlaca(placa: string): Promise < Car > {
  return this.carRepository.findOne({
    where: [
      { licensePlate: placa }
    ]
  });
}

async remove(id: string): Promise < void> {
  await this.carRepository.delete(id);
}
}