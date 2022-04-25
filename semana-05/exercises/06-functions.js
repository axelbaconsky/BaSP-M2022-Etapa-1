console.log('--EXERCISE 6: FUNCTIONS');

// A - Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
//Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
//dicha variable en la consola del navegador.

console.log('-Exercise 6.a: ');

var num1 = 5, num2 = 4;
var result;

function sumaA(num1, num2) {
    return num1 + num2;
}

result = sumaA(num1, num2);

console.log(result);

// B - A la función suma anterior, agregarle una validación para controlar si alguno de 
//los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
// tiene error y retornar el valor NaN como resultado.

console.log('-Exercise 6.b: ');

function sumaB(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 + num2;
    } else if (isNaN(num1)) {
        console.log('The first input is not a number: ' + num1);
    } else {
        console.log('The second input is not a number: ' + num2);
    }
}

result = sumaB(num1, num2);

alert(result);


// C - Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('-Exercise 6.c: ');

var isInteger;

function validateInteger(num1) {
    if (Number.isInteger(num1)) {
        isInteger;
    } else {
        isInteger;
    }
}

validateInteger(5.2);


// D - A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('-Exercise 6.d: ')

function sumaD(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        if (Number.isInteger(num1)) {
            if (Number.isInteger(num2)) {
                return num1 + num2;
            } 
            else {
                console.log('The second number is NOT Integer: ' + num2);
                return Math.round(num2);
            }
            
        }   
        else {
            console.log('The first number is NOT Integer: ' + num1);
            return Math.round(num1);
        }
    }  
}

var resultD = sumaD(2,7.8);

alert('Result: ' + resultD);

// E - Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
//probando que todo siga funcionando igual.

console.log('-Exercise 6.e: ');

function validation(num1,num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        if (Number.isInteger(num1)) {
            if (Number.isInteger(num2)) {
                return;
            } else {
                console.log('The second number is NOT Integer: ' + num2);
                return Math.round(num2);
            } 
            } else {
                console.log('The first number is NOT Integer: ' + num1);
                return Math.round(num1);
            }
            } else if (isNaN(num1)) {
                console.log('The first input is not a number: ' + num1);
            } else {
                console.log('The second input is not a number: ' + num2);
    }
}

function sumaE(num1, num2) {
    if (validation(num1, num2)) {
        return num1 + num2;
    } else {
        console.log('Validation Error');
    }
}
var resultE = sumaE(1.8,7);

console.log(resultE);
