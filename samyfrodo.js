//Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar 
//nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, 
//ya sea antes o después. Ejemplo:

// Ingresar nombres: Sam Frodo Legolas
// Sam y Frodo están juntos, ¡Frodo está a salvo!

// Ingresar nombres: Sam Orco Frodo
// Sam y Frodo están separados, ¡Frodo está en peligro!

const nombres = prompt("Ingrese nombres separados por un espacio");
const arrayNombres = nombres.split(" ");
let sam;
let frodo;

for(let i = 0; i <= arrayNombres.length; i++) {
    sam = arrayNombres.indexOf("Sam");
    frodo = arrayNombres.indexOf("Frodo");
}

if(sam === frodo++ || sam === frodo-- || frodo === sam++ || frodo === sam--) {
    alert('Sam y Frodo están juntos, ¡Frodo está a salvo!')
} else {
    alert('Sam y Frodo están separados, ¡Frodo está en peligro!')
}