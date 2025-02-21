
//Comparacion de variables

let a = 1;
let b = "1";


if (a === b)
    console.log("a y b son iguales");
else
    console.log("a y b son diferentes");

/*
El == es para decir si a y b son iguales en valor, pero no en tipo
Para especificar que a y b sean igual en valor y tipo, hay que usar ===
*/
/*
let myStr = "<a href='http://www.google.com'>Google</a>"; //Ojo al uso de los 2 tipos de comillas para la insercion de codigo HTML
let myStr2 = 'cadena con comillas simples  ';
let  myStr3 = `cadena con ${url}comillas invertidas`; //permite meter cosas sin cerrar comillas y concatenar con +
*/


//Funciones en JS
//Primero especifico la funcion
function log(m) {
    console.log(m);
}

//Aqui la llamo con ejemplos que le paso a la funcion

log("");

log("mi log");

//Declaracion de tipos y cadenas
/*
let myInteger = 1;
let myDouble = 2.1;
let myString = "cadena de texto";
let myBoolean = true;

console.log(myDouble);

myDouble = myDouble+ parseInt("1");
console.log(myDouble);

*/
//Crear objetos en JS
let myObj = new Object();
myObj.id = 1;
myObj.name = "objetoPrueba";
myObj.p = true;

let myMap = new Map();
myMap.size = 0;

let myArray = new Array();
let myArray2 = [];
let myArray3 = [1, "perro", true, 4, 5]; //pueden ser de diferente tipo gracias a que JS es debilmente tipado (no muy recomendable)
let myArray4 = [1, 2, 3, 4, 5];

myArray4[2] = 8; //asociar valor a indice
myArray4.push(6); //añadir valor al final del array
myArray4.pop(); //eliminar el ultimo valor del array

log(myArray4);

for (let i = 0; i < myArray4.length; i++)
    log(myArray4[i]);

//En vez de usar un  for-each, puedo usar iterators
myArray4.forEach(function f(v) {
    log(`v = ${v}`);
});

//Simplificando:
//myArray4.forEach((v) =>log(`v = ${v}`));

myArray4.forEach(log);

//Usando callbacks (codigo que se ejecuta en paralelo junto al codigo principal)
/* Puedo pasar a una funcion o iterator otra funcion. Esto no pasaba en java, pero si que podiamos invocar funciones o llamarlas
*/

//Concatenar operadores...
/*Para cada elemento del array, le sumo uno e imprimo el resultado
*/
myArray4
    .map((v) => (v + 1))
    .forEach(log);

//Filter
/* Para cada elemento del array, le sumo 1 e imprimo solo los menores que 3
*/
myArray4
    .map((v) => (v + 1))
    .filter((v) => (v < 3))
    .forEach(log);

//Reduce
let sum = myArray4.reduce((acumulador, value) => { //Se pasan 2 valores a la funcion, el acumulador y el valor
    let nuevoAcumulador = acumulador + value;  //Se suman los valores y se  guardan en una variable nueva
    log(`acumulador = ${acumulador}, valor = ${value}`); //Imprimo
    log(`nuevoAcumulador = ${nuevoAcumulador}`); //Imprimo
    return nuevoAcumulador;
}, 1); //Otro parametro que se pasa, es el inicial para inicializar el acumulador a un valor inicial

log(sum);
////////////////////////////////////////

let contact1 = {
    name: "Juan",
    phone: "123456789"
};
let contactList = [{
    name: "Luis",
    phone: "123456789"
}, {
    name: "Pedro",
    phone: "123456789"
}, {
    name: "Maria",
    phone: "123456789"
}];
log(contactList); //Asi no se ven bien los objetos por consola
//Hay que usar JSON que representa todo como un objeto

log(JSON.stringify(contactList)); //Asi se ven bien los objetos por consola
let x = JSON.parse(' {"name":"Juan","phone":"123456789"} '); 
//Asi se convierte un JSON a un objeto, sirve para importar cadenas de texto como objeto JS rapidamente

//Imprimer el JSON mas bonito
log(JSON.stringify(contactList, null, 2)); 

//APUNTES
//Un modulo tiene muchos archivos. Creas un archivo de manifiesto que te dice como esta estrucutrado el modulo
//Paquete = mmodulo
//npm init -y para crear un archivo de manifiesto
//npm install cool-ascii-faces --save para instalar un paquete cualquier de npm


