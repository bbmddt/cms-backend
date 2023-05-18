import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Gift } from '../entities/table.gift.entity';

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
  @IsBoolean()
  branchStatus: boolean;

  @IsNotEmpty()
  @IsNumber()
  stockNumber: number;

  @IsNotEmpty()
  @IsString()
  branchBrand: string;

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

export class CreateTableEventmanagementDto {
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsString()
  @IsNotEmpty()
  eventname: string;

  @IsString()
  @IsNotEmpty()
  eventnameen: string;

  @IsString()
  @IsNotEmpty()
  authtoken: string;

  @IsString()
  @IsNotEmpty()
  tandc: string;

  @IsString()
  @IsNotEmpty()
  tandcen: string;

  @IsString()
  @IsNotEmpty()
  bannerimage: string;

  @IsString()
  @IsNotEmpty()
  backgroundimage: string;

  @IsString()
  @IsNotEmpty()
  logoimage: string;

  @IsString()
  @IsNotEmpty()
  startTime: string;

  @IsString()
  @IsNotEmpty()
  endTime: string;

  @IsString()
  @IsNotEmpty()
  venue: string;

  @IsString()
  @IsNotEmpty()
  giftlist: Gift[];
}

export class CreateGiftDto {
  @IsString()
  @IsNotEmpty()
  giftname: string;

  @IsString()
  @IsNotEmpty()
  giftnameen: string;

  @IsNumber()
  @IsNotEmpty()
  gifttotalamount: number;

  @IsNumber()
  @IsNotEmpty()
  giftsent: number;

  @IsNumber()
  @IsNotEmpty()
  giftremain: number;

  @IsNumber()
  @IsNotEmpty()
  giftrate: number;
}

export class CreateEventWithGiftsDto {
  event: CreateTableEventmanagementDto;
  gifts: CreateGiftDto[];
}
