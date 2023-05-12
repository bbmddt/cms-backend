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

  @Column({ type: 'int' })
  areaId: number;

  @Column({ type: 'varchar' })
  areaName: string;

  @Column({ type: 'varchar' })
  areaCode: string;

  @Column({ type: 'varchar' })
  areaCentering: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'timestamp', nullable: true })
  startTime: string;

  @Column({ type: 'timestamp', nullable: true })
  endTime: string;
}
