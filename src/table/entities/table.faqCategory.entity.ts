import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class faqCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'varchar' })
  faqCategory: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'timestamp', nullable: true })
  startTime: string;

  @Column({ type: 'timestamp', nullable: true })
  endTime: string;
}
