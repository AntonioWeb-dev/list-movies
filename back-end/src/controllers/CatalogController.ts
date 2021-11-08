import { Request, Response, NextFunction } from 'express';

class CatalogController {
    index(req: Request, res: Response, next: NextFunction) {
        return res.json({msg: 'ola'});;
    }
}