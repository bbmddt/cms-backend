import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Eventmanagement } from './table.eventmanagement.entity';

@Entity()
export class Gift {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  giftid: number;

  @Column()
  giftname: string;

  @Column()
  giftnameen: string;

  @Column()
  gifttotalamount: number;

  @Column()
  giftsent: number;

  @Column()
  giftremain: number;

  @Column()
  giftrate: number;

  @ManyToOne(
    () => Eventmanagement,
    (eventmanagement) => eventmanagement.giftlist,
  )
  eventmanagement: Eventmanagement;
}
