import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterImportService } from './registerImport.service';
import { RegisterImportController } from './register.controller';
import { RegisterImport } from './registerImport.entity';


@Module({
    imports: [TypeOrmModule.forFeature([RegisterImport])],
    providers: [RegisterImportService],
    controllers: [RegisterImportController],
})

export class RegisterImportModule { }
