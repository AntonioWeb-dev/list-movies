import { Request, Response } from 'express';

export class LoginController {
  handle(req: Request, res: Response) {
    const { user, password } = req.body;
    if (user == 'admin' && password == 'admin.123') {
      return res.json({ logged: true });
    }
    res.status(401).json('User unauthorized');
  }
}