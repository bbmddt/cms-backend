import { Repository } from 'typeorm';

interface PaginationOptions {
  currentPage: number;
  itemsPerPage: number;
}

export interface PaginatedData<T> {
  data: T[];
  total: number;
  totalPages: number;
  currentPage: number;
  itemsPerPage: number;
}

export async function paginate<T>(
  repository: Repository<T>,
  options: PaginationOptions,
): Promise<PaginatedData<T>> {
  const [data, total] = await repository.findAndCount({
    skip: (options.currentPage - 1) * options.itemsPerPage,
    take: options.itemsPerPage,
  });

  const totalPages = Math.ceil(total / options.itemsPerPage);

  return {
    data,
    total,
    totalPages,
    currentPage: options.currentPage,
    itemsPerPage: options.itemsPerPage,
  };
}
