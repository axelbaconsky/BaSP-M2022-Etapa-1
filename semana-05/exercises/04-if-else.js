console.log('--EXERCISE 4: IF ELSE');

// A - Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que
//0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

console.log('-Exercise 4.a: ');

var num = Math.random();

if (num > 0.5) {
    console.log(num + ' is greater than 0,5');
} 
else {
    console.log(num + ' is lower than 0,5');
}


// B - Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//“Bebe” si la edad es menor a 2 años;
//“Niño” si la edad es entre 2 y 12 años;
//“Adolescente” entre 13 y 19 años;
//“Joven” entre 20 y 30 años;
//“Adulto” entre 31 y 60 años;
//“Adulto mayor” entre 61 y 75 años;
//“Anciano” si es mayor a 75 años.

console.log('-Exercise 4.b: ');

var age = Math.random() * 101;
var result;
if (age < 2) {
    result = 'Bebe';
} else if (age > 2 && age < 12) {
    result = 'Niño';
} else if (age > 13 && age < 19) {
    result = 'Adolescente';
} else if (age > 20 && age < 30) {
    result = 'Joven';
} else if (age > 31 && age < 60) {
    result = 'Adulto';
} else if (age > 61 && age < 75) {
    result = 'Adulto Mayor';
} else {
    result = 'Anciano';
}
    
console.log(age + ' = ' + result);

