import { configuration } from "./config.js";
import { operar } from "./calculadora.js";
import fs from "fs";
import express, { Request, Response, Application, NextFunction } from 'express';
import { authenticateJwt, validateUser, validateUserWithToken } from './auth.js';
import 'dotenv/config'
import jwt, { JwtPayload } from 'jsonwebtoken';
import secureRouter from "./routes/secure.js";
import secureJwtRouter from "./routes/securejwt.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola mundo al usuario ${configuration.username}`);
});

app.get("/api-key", (req, res) => {
  res.send(`la apikey de mi aplicacion es: ${configuration.apikey}`);
});

// Endpoint POST
app.post('/login', (req: Request, res: Response) => {
  const json = req.body;
  console.log(json);
  let validation = validateUser(json.username, json.password);
  if (validation.isAuthenticated) {
    return res.json({
      status: 200,
      success: true,
      message: 'Usuario autenticado con exito',
      metadata: validation
    });
  } else {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "Usuario no encontrado o contraseña incorrecta",
    });
  }
});

app.post('/auth', (req: Request, res: Response) => {
  const json = req.body;
  console.log(json);
  let validation = validateUserWithToken(json.username, json.password);
  if (validation.isAuthenticated) {
    return res.json({
      status: 200,
      success: true,
      message: "Autenticacion correcta",
      token: validation.token,
    });
  } else {
    return res.status(401).json({
      status: 401,
      success: false,
      message: "Usuario no encontrado o contraseña incorrecta",
    });
  }
});

app.use('/secure', secureRouter);
app.use('/secure-jwt', secureJwtRouter);

export default app;