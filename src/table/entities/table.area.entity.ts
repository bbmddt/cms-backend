import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  areaname: string;

  @Column({ type: 'varchar' })
  areatype: string;

  @Column({ type: 'varchar' })
  areacentering: string;

  @Column({ type: 'varchar' })
  maplocation: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'timestamp', nullable: true })
  startdate: string;

  @Column({ type: 'timestamp', nullable: true })
  enddate: string;
}
