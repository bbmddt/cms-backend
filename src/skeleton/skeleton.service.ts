import { Injectable } from '@nestjs/common';
import { Section, SkeletonProps } from './skeleton.interface';
import { Skeleton } from './data/Skeleton.Bone.data';
import { SkeletonPromote } from './data/SkeletonPromote.data';
import { SkeletonApplication } from './data/SkeletonApplication.data';
import { SkeletonSetting } from './data/SkeletonSetting';
import { SkeletonMessager } from './data/SkeletonMessage.data';
import { editSkeleton } from './data/SkeletonEditPage.data';
import { SkeletonEvent } from './data/Skeleton.Event.data';

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
    Skeleton,
    SkeletonApplication,
    SkeletonPromote,
    SkeletonEvent,
    SkeletonMessager,
    SkeletonSetting,
  ];

  // private editpage: Section[] = editSkeleton;

  getAllSkeletons(): SkeletonProps[] {
    return this.skeletons;
  }

  getSkeletonByIndex(index: number): SkeletonProps {
    return this.skeletons[index];
  }

  getEditpage(): Section[] {
    return editSkeleton;
  }
}
