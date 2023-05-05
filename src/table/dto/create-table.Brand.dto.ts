import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateTableBrandDto {
  @IsNumber()
  id: number;

  @IsNumber()
  brandCode: number;

  @IsString()
  brandName: string;

  @IsBoolean()
  brandStatus: boolean;

  @IsString()
  modifiedDate: string;
}
