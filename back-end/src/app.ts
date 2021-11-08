import express from 'express';


class App {
    app: express.Application;
    constructor() {
        this.app = express()
    }

    middlewares() {
        this.app.use(express.json());
    }
}