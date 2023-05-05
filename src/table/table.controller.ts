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
import { UpdateTableDto } from './dto/update-table.dto';
import { Brand } from './entities/table.brand.entity';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  // @Post()
  // create(@Body() createTableBrandDto: CreateTableBrandDto) {
  //   return this.tableService.create(createTableDto);
  // }

  @Get('/brand')
  async brand_findAll(): Promise<Brand[]> {
    return this.tableService.brand_findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tableService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
  //   return this.tableService.update(+id, updateTableDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.tableService.remove(+id);
  // }
}
