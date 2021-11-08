import { IFilm } from '../models/film.interface';

export interface IFilmService {
    find(): Promise<IFilm[]>;
    findByTitle(tile: string): Promise<IFilm[]>;
    findById(id: string): Promise<IFilm>;

    create(film: IFilm): Promise<void>;
}