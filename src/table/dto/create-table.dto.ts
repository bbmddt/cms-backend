import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { Gift } from '../entities/table.gift.entity';

export class CreateTableBrandDto {
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsBoolean()
  lineup: boolean;

  @IsNotEmpty()
  @IsBoolean()
  booking: boolean;

  @IsNotEmpty()
  @IsBoolean()
  ordering: boolean;

  @IsNotEmpty()
  @IsNumber()
  brandcode: number;

  @IsNotEmpty()
  @IsString()
  brandname: string;

  @IsNotEmpty()
  @IsString()
  brandkeyword: string;

  @IsNotEmpty()
  @IsUrl()
  brandimage: string;

  @IsNotEmpty()
  @IsString()
  brandtype: string;

  @IsNotEmpty()
  @IsString()
  brandwebsite: string;

  @IsNotEmpty()
  @IsString()
  brandendpoint: string;

  @IsNotEmpty()
  @IsString()
  brandremark: string;

  @IsNotEmpty()
  @IsString()
  startdate: string;

  @IsNotEmpty()
  @IsString()
  enddate: string;
}

export class CreateTableBranchDto {
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsBoolean()
  lineup: boolean;

  @IsNotEmpty()
  @IsBoolean()
  booking: boolean;

  @IsNotEmpty()
  @IsBoolean()
  ordering: boolean;

  @IsNotEmpty()
  @IsString()
  branchname: string;

  @IsNotEmpty()
  @IsNumber()
  branchcode: number;

  @IsNotEmpty()
  @IsNumber()
  branchlinecode: number;

  @IsNotEmpty()
  @IsString()
  belongbranch: string;

  @IsNotEmpty()
  @IsString()
  branchkeyword: string;

  @IsNotEmpty()
  @IsString()
  brancharea: string;

  @IsNotEmpty()
  @IsString()
  branchaddress: string;

  @IsNotEmpty()
  @IsString()
  branchphone: string;

  @IsNotEmpty()
  @IsString()
  branchworkinghour: string;

  @IsNotEmpty()
  @IsString()
  branchbookingendpoint: string;

  @IsNotEmpty()
  @IsString()
  startdate: string;

  @IsNotEmpty()
  @IsString()
  enddate: string;

  @IsNotEmpty()
  @IsUrl()
  maplocation: string;
}

export class CreateTableCategoryDto {
  @IsNotEmpty()
  @IsString()
  categoryname: string;

  @IsNotEmpty()
  @IsBoolean()
  categorystatus: boolean;
}

export class CreateTableAreaDto {
  @IsNotEmpty()
  @IsString()
  areaname: string;

  @IsNotEmpty()
  @IsString()
  areatype: string;

  @IsNotEmpty()
  @IsString()
  areacentering: string;

  @IsNotEmpty()
  @IsUrl()
  maplocation: string;
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
