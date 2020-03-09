
//Crear un programa que permita ingresar una lista de flores y plantines (🌱). La lista debe comenzar con una flor, 
//si no lo hace debe mostrar un mensaje de error. El programa debe convertir los plantines en flores, 
//tomando como referencia la primera flor que encuentre a su izquierda. Ejemplo:

// Ingrese flores y plantines: 🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱
// ¡Las flores han germinado!: 🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸

const lista = prompt("Ingrese una lista de flores y plantines");
const listaArray = lista.split(" ");
let plantin = "";
let flor = "";

for(let i = 0; i <= listaArray.length; i++) {
    if(listaArray[i] === "plantin") {
        listaArray[i] = "flor";
    }
}
alert(`Las flores han germinado! ${listaArray}`);