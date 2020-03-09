
//Crear un programa que permita ingresar un conjunto de 5 símbolos y determine si son iguales. 
//Si lo son, mostrar un mensaje indicando que se ha ganado. Si se ingresan más de 5 sólo deben evaluarse 
//los primeros 5. Ejemplo:

// Ingrese símbolos: ⭐️⭐️⭐️💫✨
// ¡Has perdido! Inténtalo nuevamente

// Ingrese símbolos: 💫💫💫💫💫
// ¡Felicitaciones! Has ganado

const simbolos = prompt("Ingrese 5 simbolos, sol o estrella");
const arraySimbolos = simbolos.split(" ");

for(let i = 0; i < 5; i++) {
    if(arraySimbolos[i] === "estrella" || arraySimbolos[i] === "sol") {
        alert(`Felicitaciones!`);
    } else {
        alert(`Has perdido!`)
    }
}