import express from 'express';
import 'reflect-metadata';
import './database';
import cors from 'cors';
import loginRoutes from './routes/loginRoutes';
import filmRoutes from './routes/filmRoutes';

class App {
  app: express.Application;
  constructor() {
    this.app = express()
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(loginRoutes);
    this.app.use(filmRoutes)
  }
}

export default new App().app;