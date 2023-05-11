import { Controller, Get, Param } from '@nestjs/common';
import { SkeletonService } from './skeleton.service';

@Controller('skeleton')
export class SkeletonController {
  constructor(private readonly skeletonService: SkeletonService) {}

  @Get()
  getAllSkeletons() {
    return this.skeletonService.getAllSkeletons();
  }

  @Get('/index=:index')
  getSkeletonByIndex(@Param('index') index: number) {
    return this.skeletonService.getSkeletonByIndex(index);
  }

  @Get('/edit')
  getEditpage() {
    return this.skeletonService.getEditpage();
  }
}
