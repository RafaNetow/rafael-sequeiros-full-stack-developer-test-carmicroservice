7
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { CreateRegisterImportDto } from './dto/create-registerImport.dto';
import { RegisterImport } from './registerImport.entity';

@Injectable()
export class RegisterImportService {
    constructor(
        @InjectRepository(RegisterImport)
        private readonly registerImport: Repository<RegisterImport>,
    ) { }

    async save(registerImport: CreateRegisterImportDto): Promise<RegisterImport> {
        let currenImport = new RegisterImport()
        currenImport.currentImport = registerImport.currentImport;
        currenImport.licensePlate = registerImport.licensePlate;
        return await this.registerImport.save(currenImport);
    }

    async update(registerImport: RegisterImport): Promise<RegisterImport> {
        return await this.registerImport.save(registerImport);
    }

    async findAll(): Promise<RegisterImport[]> {
        return this.registerImport.find();
    }

    findByPlaca(placa: string): Promise<RegisterImport> {
        return this.registerImport.findOne({
            where: [
                { licensePlate: placa }
            ]
        });
    }

    async remove(id: string): Promise<DeleteResult> {
        return await this.registerImport.delete(id);
}
}