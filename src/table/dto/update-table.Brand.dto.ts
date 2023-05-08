import { PartialType } from '@nestjs/mapped-types';
import { CreateTableBrandDto } from './create-table.Brand.dto';

export class UpdateTableBrandDto extends PartialType(CreateTableBrandDto) {}
