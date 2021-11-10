import { Request, Response, NextFunction } from 'express';
import { IMovieService } from '../services/movieService.interface';

export class MovieController {
  movieService: IMovieService;

  constructor(movieService: IMovieService) {
    this.movieService = movieService;
    this.index = this.index.bind(this);
    this.create = this.create.bind(this);
    this.show = this.show.bind(this);
  }

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      let movies = [];
      if (typeof req.query['title'] === 'string') {
        movies = await this.movieService.findByTitle(req.query['title']);
      } else {
        movies = await this.movieService.find();
      }
      const bodyReponse = movies.map((movie) => {
        const { image, title, id } = movie;
        const links = [
          {
            rel: "self",
            method: "GET",
            href: `http://localhost:3001/movies/${id}`
          }
        ]
        return { image, title, id, links };
      });
      return res.json(bodyReponse);
    } catch (err) {
      next(err)
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({});
    }
    try {
      const movie = await this.movieService.findById(id);
      const links = [
        {
          rel: "delete",
          method: "DELETE",
          href: `http://localhost:3001/movies/${id}`
        }
      ]
      return res.json({ ...movie, links });
    } catch (err) {
      next(err)
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await this.movieService.create(req.body)
      return res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}