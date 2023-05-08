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

  // @IsString()
  // modifiedDate: string;
}
