
//Crear un programa que permita ingresar una lista de 🐵(monos) y 🍌(bananas). Preguntar luego cuántas bananas 
//come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

// Ingresar monos y bananas: 🐵🍌🍌🍌🐵🍌🐵🍌
// Cuántas bananas come un mono?: 2
// ¡Oh no!¡No hay suficientes bananas para los monos! 😭

const lista = prompt("Ingrese la lista de monos y bananas");
const listaArray = lista.split(" ");

const comida = Number(prompt("Cuántas bananas come un mono?"));
let banana = 0;
let mono = 0;

for(let i = 0; i <= listaArray.length; i++) {
    if(listaArray[i] === "mono") {
        mono++;
    } else if (listaArray[i] === "banana") {
        banana++;
    }
}
if (banana / mono === 2) {
    alert(`Hay suficientes bananas para los monos`);
} else {
    alert(`No hay suficientes bananas para los monos`);
}