//Punto1

var saludar = "si";
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
}

//Punto2

var x=20;
 
if(x<=20){
    console.log("La condición es verdadera");
}

//punto3

var edad=18;

if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{

    console.log("Lo siento, no tiene edad suficiente para entrar aquí" );
}

//Punto4

var numero1 = 5;
var numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2>0) {
  console.log("numero2 es positivo");
}
if(numero1<0 || numero1!=0  ) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1+1 <numero2 ) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Punto5

var numerito = 100;
 
if(numerito<50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito>=50 && numerito<=80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito>80 && numerito<100 ) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito==100) {
  console.log("numerito es igual a 100");
}else{
    console.log("numerito es estrictamente mayor a 100");
}
//Punto6,7,8

numerito=90
numerito=70
numerito=120

//Punto9

var diaActual="Jueves";
if (diaActual=="Jueves"){
  console.log("vaya al polideportivo");
}else{
  console.log("no puedes ir al polideportivo");
}

//Punto10

var valor1=2
var valor2=0
if(valor2==0){
  console.log("no se puede dividir");
}else{
  console.log(valor1/valor2);
}
 //Punto11

var dia="martes"
var plato;

if (dia=="lunes"){
  plato="Arroz con pollo";
}else if(dia=="martes"){
  plato="Chuleta de Cerdo/Pollo";
}else if (dia=="miercoles"){
  plato="Frijoles";
}else if (dia=="jueves"){
  plato="Sancocho de Pescado";
}else if (dia=="viernes"){
  plato="Bandeja Paisa";
}else if (dia=="sabado"){
  plato="Ajiaco";
}else if (dia="domingo"){
  plato="Sancocho de Gallina";
}
console.log("El día se hoy hay " + plato + " de comida");

//Punto12

var caracter = "m"
var tipo;

 if ( caracter=="a" || caracter== "e" || caracter=="i" || caracter== "o" || caracter== "u" ){
   tipo=" una vocal";
 }else if (caracter=0 || caracter==1 || caracter==2 || caracter==3 || caracter==4 || caracter==5 || caracter==6 || caracter==7 || caracter ==8 || caracter==9) {
   tipo="un numero";
 } else {
  tipo= "una consonante";
 }
console.log ("el caracter ingresado es " + tipo );