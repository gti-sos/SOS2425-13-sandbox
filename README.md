# SOS2425-13-sandbox - L06 + L06b
--------

👉 RENDER: https://sos2425-13-sandbox-darlopvil.onrender.com/

## Cambios en el vídeo L06b:

- [x]  Modificado el archivo "ci.yaml" a "ci-cd.yaml" para dar soporte a la integración con Render
- [x]  Modificado el archivo "./public/index.js" para mostrar que se ha desplegado todo desde GA correctamente



## Cambios en la clase L06:

   - [x]  Actualizado el archivo "index.js" según la pasada clase L06
   - [x]  Creada carpeta "src/back" para albergar todo el nuevo código de la API (modularización)
        >Creado archivo "index.js" con el nuevo código
   - [x]  Se ha eliminado el archivo cool.js
   - [x]  Creación de la rama L06 para mover allí la última clase L06
   - [x]  Creación de la carpeta "tests/back" para incluir los tests de POSTMAN (tests y environments)
   - [x]  Revisar "package.json" por los nuevos cambios:
        >Se ha cambiado el valor de "type" debido al cambio en el require del antiguo "index.js"

        >Se han creado unos tests para comprobar la colección de POSTMAN en local, en render y por default

        >Se ha agregado un nuevo módulo (start-server-and-run) a nivel de desarrollo solamente
   - [x]  Creación de la carpeta ".github/workflows" para albergar el archivo "ci.yaml" 
        >De esta manera, lo que simplificamos con "npm run test", ahora lo hace GA en cada push automáticamente

## Notas:

Recuerda instalar los módulos de siempre si te dan fallos
- [x]  Express con "npm install express -s"
- [x]  NeDB con "npm install nedb -s"
- [x]  start-server-and-run con "npm install start-server-and-test --save-dev"

Recuerda usar "newman" en modo "npx" para no instalarlo y hacer correr el test y la environment exportados de POSTMAN:
(Esto de todos modos está dentro de "packge.json")

- [x]  Pruebas en remoto: >npx newman run tests/back/api-tests.json -e tests/back/api-env-local.json
- [x]  Pruebas en render: >npx newman run tests/back/api-tests.json -e tests/back/api-env-online.json

## Nuevos comandos útiles:

>npm run XXX para correr el test que quieras 

>npm run test para correr el test local usando el módulo "start-server-and-run" (mejor, no tengo que iniciar el server manualmente)
