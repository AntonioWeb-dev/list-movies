import { Router } from 'express';
import { MovieController } from '../controllers/MovieController';
import { MovieService } from '../services/MovieService';

const route = Router();

const movieService = new MovieService();
const movieController = new MovieController(movieService);

route.get('/movies', movieController.index);
route.get('/movies/:id', movieController.show);
route.post('/movies', movieController.create);


export default route;