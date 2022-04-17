console.log('--EXERCISE 2: STRINGS');

//A - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
//mayúscula (utilizar toUpperCase).

console.log('-Exercise 2.a: ');

var string1 = 'RocketRadium';

console.log(string1.toUpperCase());


//B - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
//los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.b: ');

var string1 = 'RocketRadium';
var result = string1.substring(0, 5);

console.log(result);

//C - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
//últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('-Exercise 2.c: ');

var string1 = 'RocketRadium';
var result = string1.substring(9);

console.log(result);

//D - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
//en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
//toLowerCase y el operador +).

console.log('-Exercise 2.d: ');

var string1 = 'rocketradium';
var result = (string1.substring(0, 1).toUpperCase() + string1.substring(1).toLowerCase());

console.log(result);

//E - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición
//del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('-Exercise 2.e: ');

var string1 = 'Rocket Radium';
var result = string1.indexOf(' ');

console.log(result);

//F - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
//tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('-Exercise 2.f: ');

var string1 = 'conditional sentences';
var result = 
    (string1.substring(0,1).toUpperCase() + string1.substring(1,11).toLowerCase() + ' ' 
    + string1.substring(12,13).toUpperCase() + string1.substring(13).toLowerCase());

console.log(result);


