import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import exp from 'constants';

export class CreateTableBrandDto {
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
}

export class CreateTableBranchDto {
  @IsNotEmpty()
  @IsNumber()
  branchCode: number;

  @IsNotEmpty()
  @IsString()
  branchName: string;

  @IsNotEmpty()
  @IsString()
  branchBrand: string;

  @IsNotEmpty()
  @IsBoolean()
  branchStatus: boolean;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;
}

export class CreateTableCategoryDto {
  @IsNotEmpty()
  @IsString()
  categoryName: string;

  @IsNotEmpty()
  @IsBoolean()
  categoryStatus: boolean;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;
}

export class CreateTableAreaDto {
  @IsNotEmpty()
  @IsNumber()
  areaId: number;

  @IsNotEmpty()
  @IsString()
  areaName: string;

  @IsNotEmpty()
  @IsString()
  areaCode: string;

  @IsNotEmpty()
  @IsString()
  areaCentering: string;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;
}

export class CreateTablefaqCategoryDto {
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsString()
  faqCategory: string;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;
}
