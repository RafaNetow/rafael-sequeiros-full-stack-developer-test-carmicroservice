import { ApiProperty } from '@nestjs/swagger';

export class CreateRegisterCarDto {
         @ApiProperty()
         checkIn: Date;

         @ApiProperty()
         checkOut: Date;

         @ApiProperty()
         licensePlate: string;
         
         @ApiProperty()
         active: boolean;
       }
