import app from "./server.js";

const puerto = 3000;

app.listen(puerto, () => {
  console.log("servidor levantado en puerto: ", puerto);
});
