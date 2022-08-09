console.log ("Hola");

function saludo(){
    console.log ("¿que tal?");
}
//llamado a la función
saludo();

function suma(){
    var numero1= 2;
var numero2= 4;
console.log (numero1+numero2);

}
suma();

function sumita(){
    var numerito1= 10;
    var numerito2=12;
    return numerito1+numerito2;   
}
console.log (sumita());

//Función con parametros

function sumar(num1,num2){
    return num1+num2;
}
console.log(sumar(3,8));

//Diseñe un algoritmo que retorne el doble de la suma entre dos numeros.

sumaNumeros = sumar (1 , 2)
function doblenumero (sumaNumeros){
    return sumaNumeros * 2
}
console.log ("El doble de la suma es: " + doblenumero(sumaNumeros));

/*
Solución 2
Una función puede ser llamada por otra. 
*/

function doblenumero2 (num1 , num2){
    return sumar(num1 , num2) * 2;
}

var resultado = doblenumero2(5,10);
console.log("El doble de la suma de dos numeros es " + resultado);