/* Endpoints utilizando jwt */

import express, { Request, Response, } from 'express';
import { authenticateJwt } from '../auth.js';

let secureJwtRouter = express.Router();

secureJwtRouter.use((req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '')
    authenticateJwt(token!) ? next() : res.status(401).json({ message: 'Acceso no autorizado' });
 })


secureJwtRouter.get('/secure/hello', (_req: Request, res: Response) => {
    res.json({ message: 'Bienvenido a express' });
});

export default secureJwtRouter;