import { Request, Response, NextFunction } from 'express';
import { IFilmService } from '../service/filmService.interface';

class FilmController {
    filmService: IFilmService;
    constructor(filmService:IFilmService ) {
        this.filmService = filmService;
    }
    async index(req: Request, res: Response, next: NextFunction) {
        try {
            const films = await filmService.find();
            const { id, title, image } = films;
            return res.json({msg: 'ola'});;
        } catch {

        }
    }
}