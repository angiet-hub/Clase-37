//Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea 
//encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al 
//buscado, o indicar si no se ha encontrado. Ejemplo:

// Ingrese valores: 5 7 12 34 54 2 12
// Ingrese valor a buscar: 12

// El valor 12 se encuentra en el índice 12

//Una vez hecho este ejercicio, investigar el método indexOf.

const valores = prompt("Ingrese los valores separados por espacio");
const indice = Number(prompt("Ingrese el valor a buscar"));
const valoresArray = valores.split(" ");


for(let i = 0; i < valores.length; i++) {
    if(indice === Number(valoresArray[i])) {
        alert(`El valor ${indice} se encuentra en el índice ${i}`)
    }
}
if (indice !== Number(valoresArray[i])) {
    alert(`Error`)
}