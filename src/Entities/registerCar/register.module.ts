import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterCarService } from './register.service';
import { RegisterCar } from './registerCar.entity';
import { RegisterController } from './register.controller'

@Module({
  imports: [TypeOrmModule.forFeature([RegisterCar])],
  providers: [RegisterCarService],
  controllers: [RegisterController],
  exports: [RegisterCarService],
})
export class RegisterCarModule {}
