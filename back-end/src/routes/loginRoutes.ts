import { Router } from 'express';
import { LoginController } from '../controllers/LoginController';

const route = Router();

const loginController = new LoginController();

route.post('/login', loginController.handle);

export default route;