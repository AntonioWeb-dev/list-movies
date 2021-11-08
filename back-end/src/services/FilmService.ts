import { FilmModel } from '../models/Film';

export class FilmService {
    async find() {
        try {
            const films = await FilmModel.find();
            return films;
        } catch(err) {
            throw err
        }
    }

    async findById() {
        
    }
}