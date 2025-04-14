# SOS2425-13-sandbox - L07
--------

👉 RENDER: https://sos2425-13-sandbox-darlopvil.onrender.com/

## Cambios en el vídeo L07:

- [x]  Integración total con Svelte (creada la carpeta src/front con un minimal svelte app)
- [x]  Modificación del archivo index.js para importar Svelte
- [x]  Modificación del package.json para integrar el lanzamiento del build de la app
- [x]  Modificación del archivo ci-cd para GA incluyendo el build para Svelte

## Troubleshooting:

- [x] Si te aparece el error siguiente:
>Error in svelte.config.js

Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@sveltejs/adapter-node' imported from c:\SOS2425\SOS2425-13-sandbox\src\front\svelte.config.js

Basta con instalar el módulo que te pone en el directorio /src/front con:
`npm install @sveltejs/adapter-node`



## Notas:

Recuerda instalar los módulos de siempre si te dan fallos
- [x]  Express con "npm install express -s"
- [x]  NeDB con "npm install nedb -s"
- [x]  start-server-and-run con "npm install start-server-and-test --save-dev"


## Nuevos comandos útiles:


- [x]   npm install
     > te instala el servidor tanto en la raíz (de la carpeta) como en la carpeta del front (solo la primera vez si hago un clone por ejemplo)
- [x]  1-  npm run build
   >(en el raíz de la carpeta)
- [x]  2- npm run dev -- --open
   > (En la carpeta /src/front) para modificar solo el front "en vivo"
- [x]  npm start
     > (En la carpeta raíz de tu proyecto) para arrancar el servidor Express+Svelte