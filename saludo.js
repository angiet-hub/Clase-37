
//Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo 
//a cada persona. Ejemplo:

    // Ingrese nombres: Ada Greta Grace
    
    // ¡Hola Ada!
    // ¡Hola Greta!
    // ¡Hola Grace!

const nombres = prompt("Ingrese tres nombres por separado");
const arrayNombres = nombres.split(" ");

alert(`Hola ${arrayNombres[0]}!
Hola ${arrayNombres[1]}!
Hola ${arrayNombres[2]}!
`)