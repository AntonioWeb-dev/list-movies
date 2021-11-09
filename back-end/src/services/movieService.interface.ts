import { IMovie } from '../models/movie.interface';

export interface IMovieService {
  find(): Promise<IMovie[]>;
  findById(id: string): Promise<IMovie>;
  findByTitle(title: string): Promise<IMovie[]>;
  create(movie: IMovie): Promise<void>;
}