import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './Entities/Car/car.module'
import { RegisterCarModule } from './Entities/registerCar/register.module'
@Module({
  imports: [CarModule, RegisterCarModule,
            TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
