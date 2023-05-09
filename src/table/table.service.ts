import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTableBrandDto } from './dto/create-table.Brand.dto';
import { UpdateTableBrandDto } from './dto/update-table.Brand.dto';
import { Brand } from './entities/table.brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginatedData, paginate } from '../utils/pagination';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  async brand_create(createTableBrandDto: CreateTableBrandDto): Promise<Brand> {
    const brand = this.brandRepository.create(createTableBrandDto);
    await this.brandRepository.save(brand);
    return brand;
  }

  async brand_findAll(
    page: number,
    itemsPerPage: number,
  ): Promise<PaginatedData<Brand>> {
    const options = { currentPage: page, itemsPerPage: itemsPerPage };
    return await paginate<Brand>(this.brandRepository, options);
  }

  async brand_findByID(id: number): Promise<Brand> {
    const brand = await this.brandRepository.findOne({ where: { id: id } });

    if (!brand) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }
    return brand;
  }

  async brand_update(id: number, updateTableBrandDto: UpdateTableBrandDto) {
    const brand = await this.brandRepository.preload({
      id,
      ...updateTableBrandDto,
    });
    if (!brand) {
      throw new NotFoundException(`Table with ID:${id} not found`);
    }

    await this.brandRepository.save(brand);
    return brand;
  }

  async brand_remove(id: number): Promise<void> {
    const result = await this.brandRepository.delete({ id });
    console.log(result.affected + ' deleted');
    if (result.affected === 0) {
      throw new NotFoundException(`Table with ID:${id} not found`);
    }
  }
}
