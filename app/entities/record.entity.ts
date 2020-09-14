import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
@Entity()
export class Record {

  @PrimaryGeneratedColumn()
  id: string

  @Column({
    type: 'varchar'
  })
  uuid: string

  @Column({
  })
  events: string
}