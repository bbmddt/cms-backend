import { PartialType } from '@nestjs/mapped-types';
import {
  CreateTableAreaDto,
  CreateTableBranchDto,
  CreateTableBrandDto,
  CreateTableCategoryDto,
  CreateTablefaqCategoryDto,
} from './create-table.dto';

export class UpdateTableBrandDto extends PartialType(CreateTableBrandDto) {}
export class UpdateTableBranchDto extends PartialType(CreateTableBranchDto) {}
export class UpdateTableCategoryDto extends PartialType(
  CreateTableCategoryDto,
) {}
export class UpdateTableAreaDto extends PartialType(CreateTableAreaDto) {}
export class UpdateTablefaqCategoryDto extends PartialType(
  CreateTablefaqCategoryDto,
) {}
