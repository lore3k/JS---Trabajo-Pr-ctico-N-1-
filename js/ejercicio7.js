/*
Escribe un programa que pida 3 números y escriba 
en la pantalla el mayor de los tres.
*/

let a = parseInt(prompt("Ingresa un número"));
let b = parseInt(prompt("Ingresa otro número"));
let c = parseInt(prompt("Ingresa un tercer número"));

if(a<b & b<c){
    document.write("El mayor es "+c);
}
else{
    if(a>b && b>c){
        document.write("El mayor es "+a);
    }
    else{
        if(b>a && a>c){
            document.write("El mayor es "+b);
        }
        else{
            document.write("Son iguales");
        }
    }
    
}