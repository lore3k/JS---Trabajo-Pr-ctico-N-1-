/*
10.- Escribe un programa que pida un número y nos diga si 
es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/

let a = parseInt(prompt("Ingresa un número"));

if((a%2===0)||(a%3===0)||(a%5===0)||(a%7===0)){
    document.write("Es divisible en 2, 3, 5 o 7");
}
else{
    document.write("No es divisible en 2, 3, 5 o 7");
}
