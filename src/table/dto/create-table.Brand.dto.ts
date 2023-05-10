import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTableBrandDto {
  // @IsNumber()
  // id: number;

  @IsNotEmpty()
  @IsNumber()
  brandCode: number;

  @IsNotEmpty()
  @IsString()
  brandName: string;

  @IsNotEmpty()
  @IsBoolean()
  brandStatus: boolean;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;

  // @IsString()
  // modifiedDate: string;
}
