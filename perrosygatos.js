//Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado 
//y los gatos por otro. Ejemplo:

// Ingrese perros y gatos: 🐶🐱🐶🐱🐱🐶🐶
// Resultado: 🐶🐶🐶🐶🐱🐱🐱

const animales = prompt('Ingrese perros y gatos separados por un espacion');
const arrayAnimales = animales.split(" ");
let animalesFinal= [];
let perrosArray = [];
let gatosArray = [];

for(let i = 0; i < arrayAnimales.length; i++){
    if(arrayAnimales[i] === "perro"){
        perrosArray.push(arrayAnimales[i]);
    } 
    if(arrayAnimales[i] === "gato") {
        gatosArray.push(arrayAnimales[i]);
    }
}
animalesFinal = perrosArray.concat(gatosArray);

alert(`${animalesFinal}`)