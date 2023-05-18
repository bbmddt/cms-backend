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

  @Column({ type: 'boolean' })
  lineup: boolean;

  @Column({ type: 'boolean' })
  booking: boolean;

  @Column({ type: 'boolean' })
  ordering: boolean;

  @Column({ type: 'int' })
  branchcode: number;

  @Column({ type: 'varchar' })
  branchname: string;

  @Column({ type: 'boolean' })
  status: boolean;

  @Column({ type: 'int' })
  branchlinecode: number;

  @Column({ type: 'varchar' })
  belongbranch: string;

  @Column({ type: 'varchar' })
  branchkeyword: string;

  @Column({ type: 'varchar' })
  brancharea: string;

  @Column({ type: 'varchar' })
  branchaddress: string;

  @Column({ type: 'varchar' })
  branchphone: string;

  @Column({ type: 'varchar' })
  branchworkinghour: string;

  @Column({ type: 'varchar' })
  branchbookingendpoint: string;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'now()' })
  modifiedDate: string;

  @Column({ type: 'varchar' })
  maplocation: string;

  @Column({ type: 'timestamp', nullable: true })
  startdate: string;

  @Column({ type: 'timestamp', nullable: true })
  enddate: string;
}
