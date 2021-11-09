import { EntityRepository, Repository } from 'typeorm';
import { Movie } from '../models/Movie';

@EntityRepository(Movie)
export class FilmRepository extends Repository<Movie> { }