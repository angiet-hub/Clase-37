//Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea 
//averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los 
//valores originales o no. Ejemplo:

    // Ingrese valores: 5 7 99 34 54 2 12
    // Ingrese valor a buscar: 54
    
    // El valor 54 se encuentra entre los valores originales

const numeros = prompt("Ingrese numeros sepaarados por espacios");
const numeroABuscar = Number(prompt("Ingrese el valor a buscar"));
const arrayNumeros = numeros.split(" ");

let i = 0;


for(i = 0; i < arrayNumeros.length; i++) {
       if(numeroABuscar === Number(arrayNumeros[i])) {
        alert(`El valor ${numeroABuscar} se encuentra entre los valores originales`)
    } else {
        alert(`Error`)
    }
}
