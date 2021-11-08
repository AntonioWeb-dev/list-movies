export class loginController {
    handle(req: Request, res: Reponse) {
        const { user, password } = req.body;
        if(user == 'admin' && password == 'admin.123') {
            return res.json({ logged: true });
        }
        res.status(401).json({msg: 'User unauthorized'});
    }
}