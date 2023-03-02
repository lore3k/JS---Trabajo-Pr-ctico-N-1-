/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es 
divisible (hay que decir todos por los que es divisible)
*/

let a = parseInt(prompt("Ingresa un número"));

if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0){
    if (a % 2 === 0){
        document.write("Es divisible por 2. ");
    }
    if (a % 3 === 0) {
        document.write("Es divisible por 3. ");
    }
    if (a % 5 === 0) {
        document.write("Es divisible por 5. ");
    }
    if (a % 7 === 0) {
        document.write("Es divisible por 7. ");
    }
} 
else {
    document.write("No es divisible por 2, 3, 5 ni por 7");
}
