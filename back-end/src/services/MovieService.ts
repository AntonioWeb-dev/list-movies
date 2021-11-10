import { IMovie } from 'models/movie.interface';
import { getCustomRepository, Like } from 'typeorm';
import { FilmRepository } from '../repositories/FilmRepository';
import { IMovieService } from './movieService.interface';

export class MovieService implements IMovieService {
  async find() {
    try {
      const filmRepository = getCustomRepository(FilmRepository)
      const films = await filmRepository.find();
      return films;
    } catch (err) {
      throw err
    }
  }

  async findById(id: string): Promise<IMovie> {
    try {
      const filmRepository = getCustomRepository(FilmRepository)

      const movie = await filmRepository.find({ id });
      return movie[0];
    } catch (err) {
      throw err
    }
  }

  async findByTitle(title: string) {
    try {
      const filmRepository = getCustomRepository(FilmRepository)
      const movies = filmRepository.find({
        title: Like(`%${title}%`)
      });
      return movies;
    } catch (err) {
      throw err
    }
  }

  async create(movie: IMovie) {
    try {
      const filmRepository = getCustomRepository(FilmRepository)
      await filmRepository.save(movie);
    } catch (err) {
      throw err
    }
  }


}