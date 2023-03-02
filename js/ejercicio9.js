/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

let frase = prompt("Escribe una frase");
let longFrase = frase.length;
let i;

for(i=0; i<longFrase; i++){
    if(frase.charAt(i) === "a" || 
    frase.charAt(i) === "e" || 
    frase.charAt(i) === "i" || 
    frase.charAt(i) === "o" || 
    frase.charAt(i) === "u"){
        document.write(frase.charAt(i));
    }
}