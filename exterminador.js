//Crear un programa que permita ingresar una lista de animales separados por espacios y devuelva un mensaje con 
//todos los animales menos los mosquitos y alacranes. Ejemplo:

// Ingrese animales: 🐱 🐭 🐶 🦟 🦊 🦂

// Animales sin insectos: [🐱, 🐭, 🐶, 🦊]

const animales = prompt('Ingrese una lista de animales');
const animalesArray = animales.split(" ");
let nuevoArray = [];

for( let i = 0; i < animalesArray.length; i++) {
    if(animalesArray[i] !== "mosquito" && animalesArray[i] !== "alacran") {
        nuevoArray.push(animalesArray[i]);
    }
}

console.log(nuevoArray)