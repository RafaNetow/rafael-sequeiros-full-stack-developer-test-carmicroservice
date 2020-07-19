import { ApiProperty } from '@nestjs/swagger';

export class CreateRegisterImportDto {

    @ApiProperty()
    licensePlate: string;

    @ApiProperty()
    currentImport: Number

}
