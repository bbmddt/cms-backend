import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableBrandDto } from './dto/create-table.Brand.dto';
import { UpdateTableBrandDto } from './dto/update-table.Brand.dto';
import { Brand } from './entities/table.brand.entity';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Post('/brand')
  brand_create(
    @Body() createTableBrandDto: CreateTableBrandDto,
  ): Promise<Brand> {
    return this.tableService.brand_create(createTableBrandDto);
  }

  @Get('/brand')
  async brand_findAll(): Promise<Brand[]> {
    return this.tableService.brand_findAll();
  }

  @Get('/brand/:id')
  async brand_findByID(@Param('id') id: number): Promise<Brand> {
    return this.tableService.brand_findByID(+id);
  }

  @Patch('/brand/:id')
  async brand_update(
    @Param('id') id: number,
    @Body() updateTableBrandDto: UpdateTableBrandDto,
  ): Promise<Brand> {
    return this.tableService.brand_update(+id, updateTableBrandDto);
  }

  @Delete('/brand/:id')
  async brand_remove(@Param('id') id: number): Promise<void> {
    return this.tableService.brand_remove(+id);
  }
}
