import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRegisterImportDto } from './dto/create-registerImport.dto';
import { RegisterImport } from './registerImport.entity';
import { RegisterImportService } from './registerImport.service';
import { } from './registerImport.entity'
import { DeleteResult } from 'typeorm';



@Controller('registerImport')
export class CarController {
    constructor(private readonly registerService: RegisterImportService) { }

    @Post()
    create(@Body() createCartDto: CreateRegisterImportDto): Promise<RegisterImport> {
        return this.registerService.save(createCartDto);
    }


    @Get()
    findAll(): Promise<Car[]> {
        return this.registerService.findAll();
    }

    @Get(':placa')
    findOne(@Param('placa') placa: string): Promise<RegisterImport> {
        return this.registerService.findByPlaca(placa);
    }



    @Delete(':id')
    remove(@Param('id') id: string): Promise<DeleteResult> {
        return this.registerService.remove(id);
    }
}
