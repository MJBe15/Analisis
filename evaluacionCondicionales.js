//Jeffer Rodriguez y Maria Jose Berrocal

//1
var ValorVariable= 350;
 
if (ValorVariable > 200){
   console.log("La condición es verdadera")
}

//2
var valor= 4;
 
if (valor >= 20 || valor <= 5){
   console.log("El valor es correcto")
}

//3
var numero = 40
 
if (numero===40){
   console.log('El número es igual que "40" en valor y tipo');
}else if(numero>10 && numero<50 ){
    console.log('El número es mayor que 10 y menor a 50');
}else if(numero==9 || numero<=8){
    console.log("El número es igual que 9 o menor igual que 8");
}else if(numero>=50){
    console.log("El número es mayor igual que 50");
}

//Respuesta 3.A
 numero=40;
//Respuesta 3.B
 numero=30;
//Respuesta 3.C
 numero=9;
//Respuesta 3.D
 numero=50;

//4
var num1=5
var num2=5
var num3= num1 + num2
if (num1==num2){
    console.log("los dos numeros son iguales");
}else if(num1!=num2){
console.log("el resultado de la suma es" + num3);
}

//5

var persona= "joven"
var obsequio
if (persona=="infante"){
    obsequio="juguete";
  }else if(persona=="joven"){
    obsequio="audifonos";
  }else if (persona=="adulto"){
    obsequio="Bono para cena en pareja";
  }else if (persona=="adulto mayor"){
    obsequio="Paseo a sitio turístico";
  }
  console.log ("La persona ganadora gano un " + obsequio);

  //6

  var domicilioeinstalacion= 24000  
  var pulgadas= 92;
  if (pulgadas==37){ 
      console.log("el valor a pagar es " + "$" + (500000 + domicilioeinstalacion));
 }else if (pulgadas==42){ 
    console.log("el valor a pagar es " + "$" + (820000 + domicilioeinstalacion));
}else if (pulgadas==55){ 
        console.log("el valor a pagar es " + "$" + (1500000+ domicilioeinstalacion));
 } else if (pulgadas==75){ 
        console.log("el valor a pagar es " + "$" + (3000000+ domicilioeinstalacion));
    } else if (pulgadas!=42 || pulgadas!=37 || pulgadas!=55 || pulgadas!=75){
console.log("las pulgas que solicito no estan en el inventario");
}
