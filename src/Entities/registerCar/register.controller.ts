import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRegisterCarDto } from './dto/create-register.dto';
import { RegisterCar } from './registerCar.entity';
import { RegisterCarService } from './register.service';

@Controller('registerCar')
export class RegisterController {
  constructor(private readonly registerService: RegisterCarService) {}

  @Post()
  create(@Body() createCarRegistertDto: CreateRegisterCarDto): Promise<RegisterCar> {
    return this.registerService.checkInRegister(createCarRegistertDto);
  }

  @Get()
  findAll(): Promise<RegisterCar[]> {
    return this.registerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RegisterCar> {
    return this.registerService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.registerService.remove(id);
  }
}
