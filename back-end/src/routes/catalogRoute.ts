import { Router } from 'express';
import { CatalogController } from '../controller/CatalogController';

const route = Router();

const catalogController = new CatalogController();

route.get('/catalog', catalogController.index);

export default route;