/*
6.- Escribe un programa que pida dos números y escriba en la 
pantalla cual es el mayor.
*/

let a = parseInt(prompt("Ingresa un número"));
let b = parseInt(prompt("Ingresa otro número"));

if(a<b){
    document.write("El mayor es "+b);
}
else{
    document.write("El mayor es "+a);
}