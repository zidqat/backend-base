import express from "express";
import { configuration } from "./config.js";
import { operar } from "./calculadora.js";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola mundo al usuario ${configuration.username}`);
});

app.get("/api-key", (req, res) => {
  res.send(`la apikey de mi aplicacion es: ${configuration.apikey}`);
});


export default app;