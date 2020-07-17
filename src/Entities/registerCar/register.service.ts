import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterCarDto } from './dto/create-register.dto';
import { RegisterCar } from './registerCar.entity';


@Injectable()
export class RegisterCarService {
  constructor(
    @InjectRepository(RegisterCar)
    private readonly registerRepository: Repository<RegisterCar>,
  ) {}

  async checkInRegister (
    createRegisterDto: CreateRegisterCarDto,
  ): Promise<RegisterCar> {
    const registerCar = new RegisterCar();
    registerCar.checkIn = createRegisterDto.checkIn;
    registerCar.checkIn = createRegisterDto.checkOut;
    registerCar.licensePlate = createRegisterDto.licensePlate;
    return this.registerRepository.save(registerCar);
  }

  async update(car: RegisterCar): Promise<RegisterCar> {
    return await this.registerRepository.save(car);
  }

  async findAll(): Promise<RegisterCar[]> {
    return this.registerRepository.find();
  }

  findOne(placa: string): Promise<RegisterCar> {
    return this.registerRepository.findOne({ where: [
      { licensePlate: placa,
      active:true } 
    ]});
  }

  async remove(id: string): Promise<void> {
    await this.registerRepository.delete(id);
  }
}
