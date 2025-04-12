//const express = require("express");
import express from "express";
import  { loadBackend } from "./src/back/index.js";
import {handler} from "./src/front/build/handler.js";

const app = express();
const PORT = process.env.PORT || 16078;

app.use(express.json());

loadBackend(app); //Cargamos primero el backend para que esté disponible para el frontend

app.use(handler); // Express usará este handler para servir la aplicación Svelte 



app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}!`);
});