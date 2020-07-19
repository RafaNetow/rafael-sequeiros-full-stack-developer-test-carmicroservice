import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRegisterImportDto } from './dto/create-registerImport.dto';
import { RegisterImport } from './registerImport.entity';
import { Regoste } from './registerImport.service';
import { } from './registerImport.entity'



@Controller('registerImport')
export class CarController {
    constructor(private readonly carService: CarService) { }

    @Post()
    create(@Body() createCartDto: CreateRegisterImportDto): Promise<RegisterImport> {
        return this.carService.save(createCartDto);
    }


    @Get()
    findAll(): Promise<Car[]> {
        return this.carService.findAll();
    }

    @Get(':placa')
    findOne(@Param('placa') placa: string): Promise<RegisterImport> {
        return this.carService.findByPlaca(placa);
    }



    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.carService.remove(RegisterImport);
    }
}
