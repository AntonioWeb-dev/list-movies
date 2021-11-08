import { Router } from 'express';
import { FilmController } from '../controller/FilmController';

const route = Router();

const filmController = new FilmController();

route.get('/films', filmController.index);

export default route;