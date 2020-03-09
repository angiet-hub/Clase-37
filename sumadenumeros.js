//Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de 
//todos los números. Ejemplo:

// Ingrese números: 5 7 10 12 24

// La suma de todos los números es: 58

const numeros = prompt("Ingrese numeros separados por espacios");
const arrayNumeros = numeros.split(" ");

let resultado = 0;

for(let i = 0; i < arrayNumeros.length; i++) {
    const numerosDelArray = Number(arrayNumeros[i]);
    resultado += numerosDelArray;
}

alert(`${resultado}`);