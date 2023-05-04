import { Injectable } from '@nestjs/common';
import { SkeletonProps } from './skeleton.interface';
import { skeleton } from './data/Skeleton.data';
import { SkeletonPromote } from './data/SkeletonPromote.data';
import { SkeletonApplication } from './data/SkeletonApplication.data';
import { SkeletonSetting } from './data/SkeletonSetting';
import { SkeletonMessager } from './data/SkeletonMessage.data';
import { type } from 'os';

@Injectable()
export class SkeletonService {
  // private skeletons: { style: string; skeleton: SkeletonProps }[] = [
  //   { style: 'skeleton', skeleton: skeleton },
  //   { style: 'SkeletonApplication', skeleton: SkeletonApplication },
  //   { style: 'SkeletonPromote', skeleton: SkeletonPromote },
  //   { style: 'SkeletonMessage', skeleton: SkeletonMessager },
  //   { style: 'SkeletonSetting', skeleton: SkeletonSetting },
  // ];

  // getAllSkeletons(): SkeletonProps[] {
  //   return this.skeletons.map((s) => s.skeleton);
  // }

  // getSkeletonByStyle(style: string): SkeletonProps {
  //   return this.skeletons.find((s) => s.style === style).skeleton;
  // }

  private skeletons: SkeletonProps[] = [
    skeleton,
    SkeletonApplication,
    SkeletonPromote,
    SkeletonMessager,
    SkeletonSetting,
  ];

  getAllSkeletons(): SkeletonProps[] {
    return this.skeletons;
  }

  getSkeletonByIndex(index: number): SkeletonProps {
    return this.skeletons[index];
  }
}
