import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {

  @ApiProperty()
  licensePlate: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  typeOfCar: string;

  @ApiProperty()
  checkIn: Date;

  @ApiProperty()
  checkOut: Date;

}
