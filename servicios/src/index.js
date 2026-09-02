import express from "express";
import colors from "colors";
import Path from "path";
import { fileURLToPath } from "url";
import { rinicio } from "./rutas/rutaInicio.js";
import { rcli } from "./rutas/rutacliente.js";
import { rpro } from "./rutas/rutaproducto.js";
import { rven } from "./rutas/rutaventa.js";


const puerto = 3000;
const app = express();

app.use(rinicio);

app.use("/cli", rcli);

app.use("/pro", rpro);

app.use("/ven", rven);

app.listen(puerto, () => {
    console.log(`Servidor iniciando en el puerto ${puerto}`.blue);
});

app.set('view engine', 'ejs');
const directorio = Path.dirname(fileURLToPath(import.meta.url));
console.log(directorio);
app.set('views', Path.join(directorio, 'vistas'));

app.use(express.static(Path.join(directorio, 'public')));

