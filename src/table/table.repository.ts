import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PaginatedData, paginate } from 'src/utils/pagination';
import { DeepPartial, FindOneOptions, Repository } from 'typeorm';

// export interface BaseService<T> {
//   findAll(): Promise<PaginatedData<T>>;

//   findById(id: number): Promise<T>;

//   create(entity: T): Promise<T>;

//   update(id: number, entity: T): Promise<T>;

//   delete(id: number): Promise<void>;
// }

@Injectable()
export abstract class BaseService<T, CreateTableDto, UpdateTableDto> {
  constructor(private readonly repository: Repository<T>) {}

  private validateId(id: number): void {
    if (isNaN(id) || id <= 0) {
      throw new BadRequestException(`Invalid ID:${id}`);
    }
  }

  async create(createTableDto: CreateTableDto): Promise<T> {
    const createdEntity = this.repository.create(
      createTableDto as DeepPartial<T>,
    );
    await this.repository.save(createdEntity);
    return createdEntity;
  }

  async findAll(page: number, itemsPerPage: number): Promise<PaginatedData<T>> {
    const options = { currentPage: page, itemsPerPage: itemsPerPage };
    return await paginate<T>(this.repository, options);
  }

  async findById(id: number): Promise<T> {
    const entity = await this.repository.findOne({
      where: { id: id },
    } as FindOneOptions);

    if (!entity) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }

    return entity;
  }

  async update(id: number, updateTableDto: UpdateTableDto): Promise<T> {
    const updatedEntity = await this.repository.preload({
      id,
      ...(updateTableDto as DeepPartial<T>),
    });

    if (!updatedEntity) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }

    await this.repository.save(updatedEntity);
    return updatedEntity;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id);

    const result = await this.repository.delete(id);
    console.log(result.affected + ' deleted');
    if (result.affected === 0) {
      throw new NotFoundException(`Table with ID ${id} not found`);
    }
  }

  // add other common methods here
}
