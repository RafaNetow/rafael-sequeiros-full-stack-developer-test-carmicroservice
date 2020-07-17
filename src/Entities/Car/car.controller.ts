import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { Car } from './car.entity';
import { CarService } from './car.service';



@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() createCartDto: CreateCarDto): Promise<Car> {
    return this.carService.checkInCar(createCartDto);
  }

  @Post()
  setOficialCar(@Body() placa: string): Promise<Car> {
    return this.carService.setOficialCar(placa)
  }

  @Get()
  findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Get(':placa')
  findOne(@Param('placa') placa: string): Promise<Car> {
    return this.carService.findByPlaca(placa);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.carService.remove(id);
  }
}
