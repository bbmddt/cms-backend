import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number;

  @Column({ type: 'int' })
  brandCode: number;

  @Column({ type: 'varchar' })
  brandName: string;

  @Column({ type: 'boolean' })
  brandStatus: boolean;

  @Column({ type: 'timestamp' })
  modifiedDate: string;
}
