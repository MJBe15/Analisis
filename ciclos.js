var casillasLlenas = 0; //Variable que cuenta cuántas casillas se han llenado
var arreglo = []; // Variable que crea el arreglo vacío
 
while(casillasLlenas < 5){ //Ciclo While con la condición que debe evaluar cada vez
    arreglo.push("InsertarValor"); //instrucción para llenar una posición a la vez
    casillasLlenas += 1; //conteo de casillas llenas, se suma 1 con cada vuelta del ciclo
}


var CantSaludos = 0;
 
while(CantSaludos < 10){
    console.log("Hola ");
    CantSaludos += 1;
}

//Hay que modificar la cantidad de veces que estan escritas en el while.
//Escribe la mitad del numero en el while, ya que al poner el dos  en CantSaludos se  divide el número del while a la mitad.


var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}
 
var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}

//Taller de Repaso ciclo white

// Cree un ciclo while que se repita 5 veces y en cada iteración imprima el número 2
console.log ("punto 1");

var ciclo1=0;
while (ciclo1<5){
    console.log(2);
    ciclo1+=1;
}

//Desarrolle un ciclo while que itere 8 veces e imprima el número del ciclo en el que se encuentra

console.log ("punto 2");
var ciclo2=0;
while (ciclo2 < 8 ){
    console.log ("va en la iteración" + ciclo2);
    ciclo2+=1
}

//Diseñe un ciclo while que itere 10 veces, pero su incremento debe ser de 2 en 2

console.log ("punto 3");
var ciclo3=0;
while (ciclo3 < 10){
    console.log ("va en la iteración" + ciclo3);
    ciclo3+=2
}

//Diseñe un ciclo while que se itere hasta que el usuario escriba la palabra ok

console.log ("punto 4");
var ciclo4=prompt ("ingrese ok para parar");
while (ciclo4 != "ok"){
    console.log("dijo" + ciclo4)
    ciclo4=prompt("ingrese ok para parar");
}

//Desarrolle un ciclo while que pida un valor numérico y se detenga hasta que ese valor sea negativo
 
console.log ("punto 5");
var ciclo5=prompt ("ingrese un negativo para deternerse");

while (ciclo5 >=0){
    console.log ("dijo " + ciclo5)
    ciclo5=prompt ("ingrese un negativo para detenerse");
}

//Elabore un ciclo while que reciba dos números, los sume y si el resultado es mayor a 20 debe detenerse. De lo contrario, debe pedir nuevamente dos valores.
 
console.log ("punto 6");
var suma=0;
 var num1;
 var num2;

 while (suma <=20){
     num1=parseInt(prompt("ingrese un valor"))
     num2=parseInt(prompt("ingrese otro valor"))
     suma=num1+num2;
 }
 