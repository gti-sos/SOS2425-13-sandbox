
import express from "express";
import cors from "cors";
import  { loadBackend } from "./src/back/index.js";
import {handler} from "./src/front/build/handler.js";

const app = express();
const PORT = process.env.PORT || 16078;

app.use(express.json());
app.use(cors()); // Middleware para permitir CORS (Cross-Origin Resource Sharing)

loadBackend(app); //Cargamos primero el backend para que esté disponible para el frontend

app.use(handler); // Express usará este handler para servir la aplicación Svelte 



app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}!`);
});