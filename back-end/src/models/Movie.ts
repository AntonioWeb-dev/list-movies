import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('movies')
export class Movie {

  @PrimaryColumn()
  id: string

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;
}