import express from 'express';

import loginRoutes from '/routes/loginRoutes';
import filmRoutes from '/routes/filmRoutes';

class App {
    app: express.Application;
    constructor() {
        this.app = express()
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(loginRoutes);
        this.app.use(filmRoutes)
    }
}

export default new App().app;