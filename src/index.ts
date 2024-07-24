import { configuration } from "./config.js";
import app from "./server.js";

const puerto = 3000;

app.listen(puerto, () => {
  console.log(`El usuario ${configuration.username} ha levantado la aplicacion en el puerto`, puerto);
});
