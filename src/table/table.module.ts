import { Module } from '@nestjs/common';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/table.brand.entity';
import { Branch } from './entities/table.branch.entity';
import { Category } from './entities/table.category.entity';
import { Area } from './entities/table.area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Brand, Branch, Category, Area])],
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
