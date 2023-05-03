import { Controller, Get, Param } from '@nestjs/common';
import { SkeletonService } from './skeleton.service';

@Controller('skeleton')
export class SkeletonController {
  constructor(private readonly skeletonService: SkeletonService) {}

  @Get()
  getAllSkeletons() {
    return this.skeletonService.getAllSkeletons();
  }

  @Get('/:style')
  getSkeletonByStyle(@Param('style') style: string) {
    return this.skeletonService.getSkeletonByStyle(style);
  }
}
