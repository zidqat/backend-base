import express from "express";
import { configuration } from "./config.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola mundo al usuario ${configuration.username}`);
});

export default app;