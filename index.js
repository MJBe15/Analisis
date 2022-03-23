console.log("Hola Mundo");
// comentario en linea
/*
comentario
de
varias
lineas
*/

//Variables
var primerVariable;
let edadUsuario;
//Declarar Variables
var nombreVariable
//Crear Variable sin asignar valor
/*
Inicializar variables:
asignar un valor al momento de crear la variable
*/
var gradoEstudiante="10A";
/*
Asignar Valor:
igualar una variable existente a un nuevo valor
*/
edadUsuario=16;
//Asignar valor desde otra variable//
console.log(edadUsuario);
var edad=17;
edadUsuario=edad;
/*
Asignar valor desde teclado:
existe dos formas de hacerlo, la primera es hacerlo por ventana emergente y la segunda es por medio de un formulario en html
*/
var valor = prompt ("ingrese un valor");
console.log ("la variable vale " + valor);

/* 
Constante:
Son valores que no pueden ser cambios durante la ejecución del código. Las constantes siempre deben ser inicializadas
*/
const PI = 3.1416;
//imprimir por consola//
//simple
console.log ("...");
console.log  (valor);
//concalenado
console.log ("..." + valor);

// operador //
// suma //
var suma;
suma = 5 + 4;
console.log (suma);

 var a = 12;
 suma = a + 8;
 console.log (suma);

 var b = 20;
 suma = a + b;
 console.log (suma);
 //resta
 var resultado;
 resultado = a - b;
 console.log (resultado);
 resultado = b - a;
 console.log (resultado);
 //multiplicación
  var producto;
  var producto = a * b;
  console.log (producto);
//división
var division;
division = a/b;
console.log (division);//0,6
divison = b/a;
console.log (division);//0,6

//orden de operaciones

var result;
result = a*b; //240
console.log(result);
result = a*b-10; //230
console.log(result);
result= a*(b-10); //120
console.log(result);
//exponente / potencia
var exp = 3 **2;//3
console.log (exp);
exp = 3**3;//3*=27
console.log (exp);
// cadenas o string 
var cadenita1 = "3";
var cadenita2 = "5";
var sumaCadenas = cadenita1 + cadenita2;
console.log (sumaCadenas);

var nombrecito = "María José";
var apellido = "Berrocal";
var nombreCompleto = nombrecito +  " "  + apellido;
console.log (nombreCompleto);

var longitud = nombrecito.length;
console.log (longitud);
console.log (nombreCompleto.length);

//Encontrar caracteres dadan la posición en el veptor

var primeraletra;0
primeraletra = nombrecito[0];
console.log (primeraletra);
console.log (nombrecito[1]);

//Encontrar la ultima posición de una cadena o vector
//Se debe buscar la longitud de la cadena y restarle uno para encontrar la ultima letra 
console.log (nombrecito.length -1);//s

//valores inmutables
// las posiciones de una cadena se pueden consultar pero no se puden reasicnar su valor 
nombrecito[0] = "P";
console.log (nombrecito);
nombrecito = "Mauricio";
console.log (nombrecito);

//Parseo o casting
/* Se trata de convertir las variables a otro tipos de datos, los cambios existentes son: enter
a entero parse.Int()
a decimal parse.Float()
a cadena string()
*/


//Convertir una variable

var entero1=prompt("Ingrese un entero");//3
var entero2=prompt("ingrese otro entero");//8
var sumaE=entero1+entero2;
console.log ("sin parseInt"+sumaE);//38

//forma1
/* convertir el dato justo en el momento en  el que se recibe por teclado 
esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado
*/
entero1=parseInt (prompt("Ingrese un entero"));//3
entero2=parseInt (prompt("ingrese otro entero"));//8
sumaE=entero1+entero2;
console.log("convertido en"+sumaE);

//Ejercicio, solicitar el perímetro 

var altura=parseInt(prompt("por favor ingrese la altura del rectangulo"));
var base=parseInt(prompt("por favor ingrese la medida de la base"));
var perimetro=altura+base+altura+base;
console.log("el perimetro del rectangulo es",perimetro);
