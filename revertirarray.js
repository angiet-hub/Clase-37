//Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el array inverso. 
//Ejemplo:

// Ingrese números: 5 7 99 34 54 2 12

// El array invertido es: [12, 2, 54, 34, 99, 7, 5]

const numeros = prompt('Ingrese numeros separados por espacios');
const arrayNumeros = numeros.split(" ");
let arrayInverso = [];

for(let i = arrayNumeros.length - 1; i >= 0; i--) {
    arrayInverso.push(arrayNumeros[i]);
}

console.log(arrayInverso)