# SOS2425-13-sandbox - L08
--------

👉 RENDER: https://sos2425-13-sandbox-darlopvil.onrender.com/

## Cambios en el vídeo L08:

- [x] Creado un atajo a `npm run dev -- --open` en package.json

## Troubleshooting:

- [x] Si te aparece el error siguiente:
>Error in svelte.config.js
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@sveltejs/adapter-node' imported from c:\SOS2425\SOS2425-13-sandbox\src\front\svelte.config.js

Basta con instalar el módulo que te pone en el directorio /src/front con:
`npm install @sveltejs/adapter-node`
 y luego reinicias VSCode


## Notas:

Recuerda instalar los módulos de siempre si te dan fallos
- [x]  Express con "npm install express -s"
- [x]  NeDB con "npm install nedb -s"
- [x]  start-server-and-run con "npm install start-server-and-test --save-dev"

¿Modo dev o modo producción?
-> Modo dev:
   - [x] npm start-front-dev
      > (En la carpeta /src/front) para modificar solo el front "en vivo"
-> Modo producción:
   - [x]  1-  npm run build
      >(en el raíz de la carpeta)
   - [x]  npm start
       > (En la carpeta raíz de tu proyecto) para arrancar el servidor Express+Svelte

## Comandos útiles:


- [x]  1-  npm run build
   >(en el raíz de la carpeta)
- [x]  2- npm run dev -- --open
   > (En la carpeta /src/front) para modificar solo el front "en vivo"
- [x]  npm start
     > (En la carpeta raíz de tu proyecto) para arrancar el servidor Express+Svelte
- [x]   npm install
     > te instala el servidor tanto en la raíz (de la carpeta) como en la carpeta del front (solo la primera vez si hago un clone por ejemplo)