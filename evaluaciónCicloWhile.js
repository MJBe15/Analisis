console.log("punto 1");

 var multiplo=prompt ("Ingrese el número hasta donde quiere conocer los multiplos");//esta variable es utilizada para solicitar una informacion al usuario
 var cicloA=0;//esta variable sirve para indicar desde donde se inicia

 while(cicloA<=multiplo){//esta es la operacion 
     if(cicloA%5==0){//es una operacion para poder imprimir lo del prompt
         console.log("El ", cicloA, "si el multiplo de 5");//este console indica la respuesta que va a ver el usuario
     }else{//es una opcion para continuar,es como un auxiliar
         console.log("El", cicloA, "no es multiplo de 5");//este console muestra todos los numeros que NO son multiplos de cinco ,esto es lo que ve el usuario
     }
     cicloA++;//es una operacion 
 }//indica que el algoritmo a finalizado
    

 console.log ("punto2");

 var cicloB=1;
var acumulador=0;
var CantEst=prompt ("por favor ingrese la cantidad de productos que va llevar");
 
while (cicloB <= CantEst){
    var valorSumar=parseInt(prompt("ingrese el precio de cada producto"))
    acumulador +=valorSumar;
    cicloB+=1;
}
console.log ("El total de su compra es de "+ acumulador + " pesos");

console.log ("punto 3")

var cicloC=1;
var acumulador2=0;
var Cantidad2=prompt ("¿desea continuar?");
 
while (Cantidad2=="si"){
    var ValorSumar2=parseInt(prompt("ingrese el precio de cada producto"))
    acumulador2+=ValorSumar2;
    Cantidad2=prompt("¿desea registrar un articulo?");
    cicloC+=1;
}
console.log ("El total de su compra es "+ acumulador2 + "pesos");

console.log("Punto 4");

var cicloD=0;
var acumuladorD=acumulador;
var CantidadD=prompt ("¿cual es la cantidad de productos que compro?");
 
while (CantidadD=="si"){   
    var precio4=parseInt(prompt("ingrese el precio "))
    acumulador+=precio4;
    CantidadD=prompt("¿desea registrar un articulo?");
    cicloD+=1;


  }
  var descuento;
  if (cicloD>=8<15) {
    precio4=acumulador-(acumulador*0.10);
    descuento=10;
}else if (cicloD>=15<25) {
    precio4=acumulador-(acumulador*0.15);
    descuento=15;
}else if (cicloD>=25) {
    precio4=acumulador-(acumulador*0.25);
    descuento=25;
}
console.log ("El total de su compra es "+ precio4+ " con el descuento aplicado de " + descuento +"%");

console.log("Punto5");

var cicloE;
var acumuladorE = 5;
var cantidadN=prompt ("por favor ingrese una a una las notas de sus estudiantes");
var aprobados=0;
var reprobados=0;

while (cicloE<=cantidadN){
 var nota=parseInt(prompt("Ingrese el valor de la nota"));
 acumuladorE =0;
 cicloE+=1;
 if (nota<3.5){
     console.log("el estudiante no aprobo la materia")
     reprobados+=1;
 } else if (nota>=3.5){
     console.log("el estudiante aprobo su materia")
     aprobados+=1;
 }if(aprobados>reprobados){
console.log ("La cantidad de estudiantes no es suficiente para curso de verano");
 }else if(reprobados>aprobados)
    console.log(" Si debe abrirse el curso de verano ");
 }
 
