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
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


