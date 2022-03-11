//Halle el área de un cuadrado y volumen de un cubo
var area1 =prompt("ingrese la medida de un lado del cuadrado")
var area2 =prompt ("ingrese la medida del otro lado del cuadrado")
var cuadrado;
var cuadrado = area1 * area2;
console.log (cuadrado);

var arista =prompt ("ingrese la medida de la arista")
var volumenCubo=arista**3;
console.log (volumenCubo);

//Halle el área y el perimetro del rectángulo
var altura =prompt ("ingrese la altura del rectángulo para obtener el area")
var base =prompt ("ingrese la base del rectángulo para obtener el area ")
var rectangulo =altura*base;
console.log (rectangulo);

var perimetro = altura+altura+base+base;
console.log (perimetro);

//Halle el diametro de un circulo
var diametro =prompt ("ingrese el diametro del circulo ")
var radio = diametro/2;
var areaCirculo = Math.PI*radio**2;
console.log (areaCirculo);

//Halle el volumen de la esfera
var diametro =prompt ("ingrese el radio de la esfera ")
var volumen = 4/3*Math.PI*radio**3;
console.log (volumen);

