import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Branch {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'int' })
  branchCode: number;

  @Column({ type: 'varchar' })
  branchName: string;

  @Column({ type: 'boolean' })
  branchStatus: boolean;

  @Column({ type: 'int' })
  stockNumber: number;

  @Column({ type: 'varchar' })
  branchBrand: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'timestamp', nullable: true })
  startTime: string;

  @Column({ type: 'timestamp', nullable: true })
  endTime: string;
}
