console.log("Init script");

//Framework que instancias a traves de la funcion
const express = require('express');
const app = express();
const PORT = process.env.PORT || 16078;
const cool = require('cool-ascii-faces');

//Configurando el server para las peticiones
/*request me puede servir para mandar un formulario y mandarlo
*/

app.use("/", express.static("./public"));

app.get("/hello", (request, response) => {
    response.send("Hola desde el servidor!");
});

app.get("/cool", (request, response) => {
    response.send(cool());
});

//Lanzar el server por un puerto
/*
Es necesario poner el mensaje de "OK escuchando" dentro de la función listen como callback.
El server tarda un tiempo hasta que se pone a escuchar por el puerto deseado.
Pero el "console.log()" es asíncrono, por lo que se ejecuta antes de que el server esté listo.
Con el uso del callback, sacamos el mensaje de "OK escuchando" cuando está configurado completamente el server.
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//console.log(`Finish setup`); //Este mensaje se ejecuta antes de que el server esté listo

