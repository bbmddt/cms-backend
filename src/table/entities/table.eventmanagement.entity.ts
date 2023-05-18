import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Gift } from './table.gift.entity';

@Entity()
export class Eventmanagement {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'varchar', length: 255 })
  eventname: string;

  @Column({ type: 'varchar', length: 255 })
  eventnameen: string;

  @Column({ type: 'varchar', length: 255 })
  authtoken: string;

  @Column({ type: 'text' })
  tandc: string;

  @Column({ type: 'text' })
  tandcen: string;

  @Column({ type: 'varchar', length: 255 })
  bannerimage: string;

  @Column({ type: 'varchar', length: 255 })
  backgroundimage: string;

  @Column({ type: 'varchar', length: 255 })
  logoimage: string;

  @OneToMany(() => Gift, (gift) => gift.eventmanagement)
  giftlist: Gift[];

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'timestamp', nullable: true })
  startTime: string;

  @Column({ type: 'timestamp', nullable: true })
  endTime: string;

  @Column({ type: 'varchar', length: 255 })
  venue: string;
}
