//Crear un programa que permita ingresar una lista de plantas con una oruga y una calavera (veneno) entre ellas. 
//La oruga se come todas las plantas que hay a su derecha, hasta que se encuentra con el veneno. 
//El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda de la oruga 
//y a la derecha del veneno. Ejemplo:

    // Ingrese plantas y oruga: 🌱🌻🌱🐛🌱🌸🌱🌱💀🌷
    // Plantas sobrevivientes: 🌱🌻🌱🌷

const inicio = '🌱 🌻 🌱 🐛 🌱 🌸 🌱 🌱 💀 🌷';
const seresJardin = inicio.split(' ');

let plantas = [];

let indexOruga = seresJardin.indexOf("🐛");
let indexVeneno = seresJardin.indexOf("💀");


/* for (let i = 0; i < seresJardin.length; i++) {
    if(seresJardin[i] === "🐛") {
        indexOruga = i;
    } else if (seresJardin[i] === "💀")
    indexVeneno = i;
} */

let seresEliminados = seresJardin.splice(indexOruga, (indexVeneno - indexOruga) + 1);

/* for (let i = 0; i < seresJardin.length; i++) {
    if (i < indexOruga || i > indexVeneno) {
        plantas.push(seresJardin[i]);
    }
} */

/* for (let i = 0; i < indexOruga; i++) {
    plantas.push(seresJardin[i]);
}

for (let i = indexVeneno + 1; i < seresJardin.length; i++) {
    plantas.push(seresJardin[i]);
} */

console.log(inicio);
console.log(seresJardin);