import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TableService } from './table.service';
import {
  CreateTableBrandDto,
  CreateTableBranchDto,
  CreateTableCategoryDto,
  CreateTableAreaDto,
} from './dto/create-table.dto';
import {
  UpdateTableBrandDto,
  UpdateTableBranchDto,
  UpdateTableCategoryDto,
  UpdateTableAreaDto,
} from './dto/update-table.dto';
import { Brand } from './entities/table.brand.entity';
import { Branch } from './entities/table.branch.entity';
import { Category } from './entities/table.category.entity';
import { Area } from './entities/table.area.entity';
import { PaginatedData } from 'src/utils/pagination';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  // *********************** Brand Controller ***********************

  @Post('/brand')
  brand_create(
    @Body() createTableBrandDto: CreateTableBrandDto,
  ): Promise<Brand> {
    return this.tableService.brand_create(createTableBrandDto);
  }

  @Get('/brand')
  async brand_findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<PaginatedData<Brand>> {
    return this.tableService.brand_findAll(page, limit);
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

  // *********************** Branch Controller ***********************

  @Post('/branch')
  async branch_create(
    @Body() createTableBranchDto: CreateTableBranchDto,
  ): Promise<Branch> {
    return this.tableService.branch_create(createTableBranchDto);
  }

  @Get('/branch')
  async branch_findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<PaginatedData<Branch>> {
    return this.tableService.branch_findAll(page, limit);
  }

  @Get('/branch/:id')
  async branch_findByID(@Param('id') id: number): Promise<Branch> {
    return this.tableService.branch_findByID(+id);
  }

  @Patch('/branch/:id')
  async branch_update(
    @Param('id') id: number,
    @Body() updateTableBranchDto: UpdateTableBranchDto,
  ): Promise<Branch> {
    return this.tableService.branch_update(+id, updateTableBranchDto);
  }

  @Delete('/branch/:id')
  async branch_remove(@Param('id') id: number): Promise<void> {
    return this.tableService.branch_remove(+id);
  }

  // *********************** Category Controller ***********************

  @Post('/category')
  async category_create(
    @Body() createTableCategoryDto: CreateTableCategoryDto,
  ): Promise<Category> {
    return this.tableService.category_create(createTableCategoryDto);
  }

  @Get('/category')
  async category_findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<PaginatedData<Category>> {
    return this.tableService.category_findAll(page, limit);
  }

  @Get('/category/:id')
  async category_findByID(@Param('id') id: number): Promise<Category> {
    return this.tableService.category_findByID(+id);
  }

  @Patch('/category/:id')
  async category_update(
    @Param('id') id: number,
    @Body() updateTableCategoryDto: UpdateTableCategoryDto,
  ): Promise<Category> {
    return this.tableService.category_update(+id, updateTableCategoryDto);
  }

  @Delete('/category/:id')
  async category_remove(@Param('id') id: number): Promise<void> {
    return this.tableService.category_remove(+id);
  }

  // *********************** Area Controller ***********************

  @Post('/area')
  area_create(@Body() createTableAreaDto: CreateTableAreaDto): Promise<Area> {
    return this.tableService.area_create(createTableAreaDto);
  }

  @Get('/area')
  async area_findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<PaginatedData<Area>> {
    return this.tableService.area_findAll(page, limit);
  }

  @Get('/area/:id')
  async area_findByID(@Param('id') id: number): Promise<Area> {
    return this.tableService.area_findByID(+id);
  }

  @Patch('/area/:id')
  async area_update(
    @Param('id') id: number,
    @Body() updateTableAreaDto: UpdateTableAreaDto,
  ): Promise<Area> {
    return this.tableService.area_update(+id, updateTableAreaDto);
  }

  @Delete('/area/:id')
  async area_remove(@Param('id') id: number): Promise<void> {
    return this.tableService.area_remove(+id);
  }
}
