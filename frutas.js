
//Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. 
//Ejemplo:

// Ingrese frutas: 🍎🍎🍐🍑🍎🍑

// Hay 3 🍎, 1 🍐 y 2 🍑

const frutas = prompt("Ingrese las frutas separadas por espacios (manzana, pera, durazno)");

const arrayFrutas = frutas.split(" ");

let manzana = 0;
let pera = 0;
let durazno = 0;

for(let i = 0; i <= arrayFrutas.length; i++) {
    if(arrayFrutas[i] === "manzana") {
        manzana++;
    } else if (arrayFrutas[i] === "pera") {
        pera++;
    } else if(arrayFrutas[i] === "durazno") {
        durazno++;
    }
}
alert(`Hay ${manzana} manzanas, ${pera} peras y ${durazno} duraznos.`)
