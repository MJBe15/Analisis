console.log ("Punto 1");

var ciclos1=0;
while (ciclos1<7){
    console.log("va en la repetición " + ciclos1);
    ciclos1+=1; 
}

console.log("Punto 2");

var ciclos2=0;
while(ciclos2<33){
    console.log("Esta repitición imprime los multiplos de tres " + ciclos2);
    ciclos2+=3;
}

console.log ("Punto 3");

var ciclos3=0;
while(ciclos3<52){
    console.log("Esta repetición muestra los números pares " + ciclos3);
    ciclos3+=2;
    }

console.log ("Punto 4");

var contador=prompt ("Por favor ingrese un número que sea el limite del contador");
var ciclos4=1;

while (ciclos4<=contador){
    console.log ("el contador va en" + ciclos4);
    ciclos4+=2;
}

console.log ("Punto 5");

var ciclos5=prompt("ingrese un número impar para deternerse");
while (ciclos5 %2==0){
    console.log ("El número " + ciclos5 + " es par ");
    ciclos5 = prompt ("ingrese un  número impar para deternerse");
}

console.log ("Punto 6");

var ciclos6=1;
var acumulador=0;
var valorSumar;
var CantEst=prompt ("porfavor ingrese la cantidad de personas que hay en su salón");
 
while (ciclos6 <= CantEst){
    valorSumar=parseInt(prompt("ingrese la edad de el estudiante"))
    acumulador =valorSumar+acumulador;
    ciclos6+=1;
}
console.log ("El total del acumulador es "+ acumulador);

console.log ("Punto 7");

var ciclos7=0
var ganador="zuricata";
var intento=prompt("ingrese el nombre de un animal para ganar la rifa");


while(intento!="zuricata"){
    intento=prompt("ingrese el nombre de un animal para ganar la rifa");
  ciclos7+=1;
}
console.log ("Felicitaciones ha sido el ganador de la rifa");
console.log("El número de intentos fue " + ciclos7);
