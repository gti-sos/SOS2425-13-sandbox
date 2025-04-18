# SOS2425-13-sandbox - L10
--------
##  ⚠️ ⚠️NO ES EL L10, SOLO SE INCLUYE LA PARTE QUE AFECTA AL D02 ⚠️ ⚠️

👉 RENDER: https://sos2425-13-sandbox-darlopvil.onrender.com/

👉 SVELTESTRAP: https://sveltestrap.js.org/

## Cambios en el vídeo L10:

- [x] Modificado el archivo `/src/front/routes/contacts/+page.svelte`
- [x] Modificado el archivo `src/back/index.js` para poder implementar esos cambios del .svelte del front
- [x] Creación de la carpeta `../contacts/[name]` con su archivo para dar soporte a la edición fuera de los datos (D02)
- [x] Mejoras varias aquí y allá porque Pablo no tenía el código bien y daba error al hacer un UPDATE al contact (D02)


## Troubleshooting:

- [x] Si te aparece el error siguiente:
>Error in svelte.config.js
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@sveltejs/adapter-node' imported from c:\SOS2425\SOS2425-13-sandbox\src\front\svelte.config.js

Basta con instalar el módulo que te pone en el directorio /src/front con:
`npm install @sveltejs/adapter-node`
 y luego reinicias VSCode


## Notas:

Recuerda instalar los módulos de siempre si te dan fallos
- [x] Express con "npm install express -s"
- [x] NeDB con "npm install nedb -s"
- [x] start-server-and-run con "npm install start-server-and-test --save-dev"
- [x] cors para permitir que un script llame a recursos en otro puerto: `npm install cors`
- [x] Sveltestrap con `npm install svelte @sveltestrap/sveltestrap` en `src/front`
- [x] Puedes arrancar el server (back edition) desde VSCode (seleccionar index.js + Run without debugging). No olvidarse de hacer el `npm run build` antes para ver los cambios!

¿Modo dev o modo producción?

-> Modo dev: (lo dejamos para ver el front)
   - [x] npm start-front-dev
      > (En la carpeta /src/front) para modificar solo el front "en vivo"

-> Modo producción:
   - [x]  1-  npm run build
      >(en el raíz de la carpeta)
   - [x]  npm start (lo dejamos para ver el back)
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

## Comandos de playwright:

- [x] npm init playwright@latest
     > Instalar el paquete `playwright`
- [x] npx playwright test  
     > Hacer los tests 
- [x] npx playwright show-report
     > Ver los resultados en detalle de los tests