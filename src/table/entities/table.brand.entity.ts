import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'boolean' })
  lineup: boolean;

  @Column({ type: 'boolean' })
  booking: boolean;

  @Column({ type: 'boolean' })
  ordering: boolean;

  @Column({ type: 'int' })
  brandcode: number;

  @Column({ type: 'varchar' })
  brandname: string;

  @Column({ type: 'varchar' })
  brandkeyword: string;

  @Column({ type: 'varchar' })
  brandimage: string;

  @Column({ type: 'varchar' })
  brandtype: string;

  @Column({ type: 'varchar' })
  brandwebsite: string;

  @Column({ type: 'varchar' })
  brandendpoint: string;

  @Column({ type: 'varchar' })
  brandremark: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'timestamp', nullable: true })
  startdate: string;

  @Column({ type: 'timestamp', nullable: true })
  enddate: string;
}
