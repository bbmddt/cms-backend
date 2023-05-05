import { PartialType } from '@nestjs/mapped-types';
import { CreateTableBrandDto } from './create-table.Brand.dto';

export class UpdateTableDto extends PartialType(CreateTableBrandDto) {}
