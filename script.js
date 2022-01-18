// var x = ["Ismael","Ernesto","Paulo","Rosa"];

// console.log(x);
// console.log(x[1]);

/*
var cars1 = ["Saab","Volvo","BMW"];

var cars2 = [
    "Ford",
    "Audi",
    "Ferrari"
];

var cars3 = new Array("Porsche","AlfaRomeo","Volkswagen");

// console.log(cars1);
// console.log(cars2);
// console.log(cars3);

// console.log("Mis dos marcas favoritas de autos son " + cars2[1] + " y " + cars3[0]);

console.log(cars1);

cars1.pop(); // Pop toma el ultimo valor de un array y elimina ese elemento del array , podemos guardarlo en una nueva variable ; Elimina y devuelve el ultimo elemento

console.log(cars1);
*/


/*
var equipo = ["Carlos","Sergio","Jazmin","Larissa","Ernesto","Salvador","Alonso","Angel","Paulo"];
console.log(equipo);

function eliminaUltimo(){
equipo.pop(); //Elimina el ultimo valor del array
}

function agregaUltimo(name){
equipo.push(name); //Agrega al ultimo valor del array
}

function eliminaPrimero(){
equipo.shift(); //Elimina el primer valor del array
}

function agregaPrimero(name){
equipo.unshift(name); //Agrega al primer valor del array
}

// eliminaUltimo();
// eliminaPrimero();
// agregaPrimero();
// agregaUltimo();

console.log(equipo[equipo.length-1]);
*/


//
//Ciclo For Each
//

/*
let frutas = [1, "Dos",3];

console.log(frutas);

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice,array);
})
*/

//
//Conocer la posicion de un elemento
//
/*
let nombre = ["Adrian","Carlos","Regina","Carlos"];

console.log(nombre);

let pos = nombre.indexOf("Carlos");

console.log(pos);
*/

//
//Eliminar un unico elemento mediante su posicion
//
/*
let nombre = ["Adrian","Carlos","Regina","Carlos"];
let indice =  nombre.indexOf("Regina");

nombre.splice(indice,1); //En el splice si no colocamos el num de elementos a eliminar cortara desde el indice que indicamos

console.log(nombre);
*/


//
//Copiar un Array
//

/*
var equipo = ["Carlos","Sergio","Jazmin","Larissa","Ernesto","Salvador","Alonso","Angel","Paulo"];

let copiaArray = equipo.slice();

console.log(copiaArray);
*/


//Si se aumenta el valor de length:
/*
let nombre = [];

console.log(nombre);

nombre.push("Elemento1","Elemento2","Elemento3","Elemento4","Elemento5","Elemento6");

console.log(nombre);

console.log(nombre.length);

console.log(Object.keys(nombre));

nombre[8] ="Elemento8";

console.log(Object.keys(nombre));

console.log(nombre);

nombre.length = 10;

console.log(nombre.length);

console.log(nombre);

//Si se disminuye el valor de la propiedad length pueden eliminarse elementos:

nombre.length = 3;

console.log(nombre.length);

console.log(nombre);

nombre.length = 10;

console.log(nombre.length);

console.log(nombre);
*/

//
//Ejercicios
//

/*
var miAlfabeto = ['A','B','C','D','E','F','G'];
function miAlfabetoLongitud(){
    console.log (miAlfabeto.length);
}
miAlfabetoLongitud();


var Planeta = ["Mercurio","Venus","Tierra","Marte","Jupiter"];

Planeta.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})


var myArr = [ 1, 2, 'Uno', true];

myArr.forEach(function(elemento, indice, array) {
    console.log(elemento);
})
*/

//
// Arrays Multidimensional
//
/*
var elementos=["Carbono","Oxígeno","Hierro"];
var simbolo=["C","O","Fe"];
var num_atomico=[6,8,26];
//var tabla_per=[elementos,simbolo,num_atomico];
var tabla_per=[["Carbono","Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];

// console.log("El símbolo del ",elementos[2]," es: ",tabla_per[1][2]);
console.log(tabla_per); 

console.log(`El elemento ${tabla_per[0][0]} tiene como simbolo la letra ${tabla_per[1][0]} y su numero atomico es ${tabla_per[2][0]} `);
*/

/*
const armando = [[["Manzana","Pina","Sandia"],["Jitomate","Lechuga"],["Gryffindor","Hufflepuff","Slytheryn","Ravenclaw"],["Lentes"]],["Cubone","Rayquaza","Charizard"],[["Sonriente"],["Feliz"],["Triste"],["Sonrojado"],["Entusiasmado"],["Jugueton"]],["Vegetitta","Kokun"]]

console.log(`El ${armando[0][1][0]} color ${armando[1][2]} se ve ${armando[2][0]} porque vio a ${armando[3][0]}`);
*/


// for(var i= 0; i<9 ; i++){
//     n=0;
//     n+=i;
//     console.log(n);
// }

// var i = 10;
// i=11;

// for(let i=1; i<3;i++){
//     console.log(i);
// }

// console.log(i);


//
//Anidados
//

// for(let num2 = 0; num2 <=5; num2++ )
// {
//     for(let num1 = 4; num1<=5; num1++)
//     {
//         console.log(num2 + " " + num1);
//     }
// }

//
//For con aumento en 3
//

// for(let num2 = 0; num2 <=15; num2+=3 )
// {
//     console.log(num2);
// }


// var n=0;

// var x=0;

// while(n<4){
//     n++;
//     x += n;
//     console.log(x);
// }



var count =0;

while (count<50)
{
    count++;

    for(let i=0; i<25;i++)
    {
        console.log(count);
    }

}