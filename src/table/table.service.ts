import { Injectable } from '@nestjs/common';
import { CreateTableBrandDto } from './dto/create-table.Brand.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Brand } from './entities/table.brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  // create(createTableDto: CreateTableDto) {
  //   return 'This action adds a new table';
  // }

  async brand_findAll(): Promise<Brand[]> {
    const brands = await this.brandRepository.find();
    return brands;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} table`;
  // }

  // update(id: number, updateTableDto: UpdateTableDto) {
  //   return `This action updates a #${id} table`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} table`;
  // }
}
