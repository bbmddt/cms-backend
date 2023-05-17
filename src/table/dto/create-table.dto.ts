import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';

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
