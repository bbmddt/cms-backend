import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateTableBranchDto,
  CreateTableBrandDto,
  CreateTableCategoryDto,
  CreateTableAreaDto,
  CreateTableEventmanagementDto,
  CreateGiftDto,
} from './dto/create-table.dto';
import {
  UpdateTableBranchDto,
  UpdateTableBrandDto,
  UpdateTableCategoryDto,
  UpdateTableAreaDto,
} from './dto/update-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Brand } from './entities/table.brand.entity';
import { Branch } from './entities/table.branch.entity';
import { Category } from './entities/table.category.entity';
import { Area } from './entities/table.area.entity';
import { PaginatedData, paginate } from '../utils/pagination';
import { Eventmanagement } from './entities/table.eventmanagement.entity';
import { Gift } from './entities/table.gift.entity';

@Injectable()
export class TableService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
    @InjectRepository(Branch)
    private branchRepository: Repository<Branch>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Area)
    private areaRepository: Repository<Area>,
    @InjectRepository(Eventmanagement)
    private readonly eventmanagementRepository: Repository<Eventmanagement>,
    @InjectRepository(Gift)
    private readonly giftRepository: Repository<Gift>,
  ) {}

  //  * Validate ID parameter
  private validateId(id: number): void {
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException(`Invalid ID:${id}`);
    }
  }

  // *********************** Brand Service ***********************

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
    this.validateId(id);

    const result = await this.brandRepository.delete({ id });
    console.log(result.affected + ' deleted');
    if (result.affected === 0) {
      throw new NotFoundException(`Table with ID:${id} not found`);
    }
  }

  // *********************** Branch Service ***********************
  async branch_create(
    createTableBranchDto: CreateTableBranchDto,
  ): Promise<Branch> {
    const branch = this.branchRepository.create(createTableBranchDto);
    await this.branchRepository.save(branch);
    return branch;
  }

  async branch_findAll(
    page: number,
    itemsPerPage: number,
  ): Promise<PaginatedData<Branch>> {
    const options = { currentPage: page, itemsPerPage: itemsPerPage };
    return await paginate<Branch>(this.branchRepository, options);
  }

  async branch_findByID(id: number): Promise<Branch> {
    const branch = await this.branchRepository.findOne({ where: { id: id } });

    if (!branch) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }
    return branch;
  }

  async branch_update(id: number, updateTableBranchDto: UpdateTableBranchDto) {
    const branch = await this.branchRepository.preload({
      id,
      ...updateTableBranchDto,
    });
    if (!branch) {
      throw new NotFoundException(`Table with ID:${id} not found`);
    }

    await this.branchRepository.save(branch);
    return branch;
  }

  async branch_remove(id: number): Promise<void> {
    this.validateId(id);

    const result = await this.branchRepository.delete({ id });
    console.log(result.affected + ' deleted');
    if (result.affected === 0) {
      throw new NotFoundException(`Table with ID:${id} not found`);
    }
  }

  // ************************ Category Service ************************

  async category_create(
    createTableCategoryDto: CreateTableCategoryDto,
  ): Promise<Category> {
    const category = this.categoryRepository.create(createTableCategoryDto);
    await this.categoryRepository.save(category);
    return category;
  }

  async category_findAll(
    page: number,
    itemsPerPage: number,
  ): Promise<PaginatedData<Category>> {
    const options = { currentPage: page, itemsPerPage: itemsPerPage };
    return await paginate<Category>(this.categoryRepository, options);
  }

  async category_findByID(id: number): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async category_update(
    id: number,
    updateTableCategoryDto: UpdateTableCategoryDto,
  ): Promise<Category> {
    const category = await this.categoryRepository.preload({
      id,
      ...updateTableCategoryDto,
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    await this.categoryRepository.save(category);
    return category;
  }

  async category_remove(id: number): Promise<void> {
    this.validateId(id);
    const result = await this.categoryRepository.delete({ id });
    console.log(result.affected + ' deleted');
    if (result.affected === 0) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }

  // ************************ Area Service ************************

  async area_create(createTableAreaDto: CreateTableAreaDto): Promise<Area> {
    const area = this.areaRepository.create(createTableAreaDto);
    await this.areaRepository.save(area);
    return area;
  }

  async area_findAll(
    page: number,
    itemsPerPage: number,
  ): Promise<PaginatedData<Area>> {
    const options = { currentPage: page, itemsPerPage: itemsPerPage };
    return await paginate<Area>(this.areaRepository, options);
  }

  async area_findByID(id: number): Promise<Area> {
    const area = await this.areaRepository.findOne({ where: { id } });
    if (!area) {
      throw new NotFoundException(`Area with ID ${id} not found`);
    }
    return area;
  }

  async area_update(
    id: number,
    updateTableAreaDto: UpdateTableAreaDto,
  ): Promise<Area> {
    const area = await this.areaRepository.preload({
      id,
      ...updateTableAreaDto,
    });
    if (!area) {
      throw new NotFoundException(`Area with ID ${id} not found`);
    }
    await this.areaRepository.save(area);
    return area;
  }

  async area_remove(id: number): Promise<void> {
    this.validateId(id);
    const result = await this.areaRepository.delete({ id });
    console.log(result.affected + ' deleted');
    if (result.affected === 0) {
      throw new NotFoundException(`Area with ID ${id} not found`);
    }
  }

  // ************************ Eventmanagement Service ************************

  //  * Create Gifts
  async createGifts(createGiftDtos: CreateGiftDto[]): Promise<Gift[]> {
    const gifts = [];

    for (const giftDto of createGiftDtos) {
      const gift = this.giftRepository.create(giftDto);
      const createdGift = await this.giftRepository.save(gift);
      gifts.push(createdGift);
    }

    return gifts;
  }

  async createEventmanagementWithGift(
    createEventmanagementDto: CreateTableEventmanagementDto,
    createGiftDto: CreateGiftDto[],
  ): Promise<Eventmanagement> {
    const eventmanagement = await this.eventmanagementRepository.create(
      createEventmanagementDto,
    );

    eventmanagement.giftlist = await this.createGifts(createGiftDto);

    await this.eventmanagementRepository.save(eventmanagement);

    return eventmanagement;
  }

  async getEventmanagementWithGifts(id: number): Promise<Eventmanagement> {
    const options: FindOneOptions<Eventmanagement> = {
      relations: ['giftlist'],
      where: { id: id },
    };
    return this.eventmanagementRepository.findOne(options);
  }

  async eventmanagement_findAll(): Promise<Eventmanagement[]> {
    return this.eventmanagementRepository.find();
  }
}
