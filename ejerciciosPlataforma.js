
//Ejercicio 1 
let arreglo = [];
let numeros= [ "10", "20", "30", "40", "50", "60", "70", "80", "90", "100",];
console.log (numeros);
console.log (numeros.length);

//Ejercicio 2

let datosUsuario= prompt ("Ingrese una frase separada por comas: Ejemplo: Me, gustas, mucho");
let Array= [datosUsuario];
console.log (Array);
console.log (Array.length);
console.log ("============================================")
let nuevoArray = datosUsuario.split (",");
let array2= [nuevoArray]
console.log (array2);
console.log (array2.length);

//Ejercicio 3

let num= [10,40,30,20,15,5];
console.log (num);
console.log ("El arreglo de forma descendente:" + num.sort (function (a,b){
    return b-a
}));
console.log ("El número más pequeño es:" + Math.min(...num));
console.log ("El número más grande es:" + Math.max(...num));