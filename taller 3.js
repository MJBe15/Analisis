//problema 1

var litros;
var tiempo;

litros=prompt("por favor ingrese las medidas de su piscina");
tiempo=litros*1/145;
console.log ("su piscina se demora en llenar"+tiempo +"horas");
/*
1h         145L
tiempo    litros
*/

//problema 2

var metros;
var milimetros;

metros=prompt ("por favor ingrese un valor en metros");
milimetros=metros*1000/1.0;
console.log("el valor que ingreso tranformado a milimetros es"+ milimetros +"mm");


//problema 3

var decimetros;

decimetros=milimetros * 1/100;
console.log(" el resultado anterior convertido a decimetros es"+ decimetros + "dm");

//problema 4

var kilometros;

kilometros=decimetros* 1.0/10000;
console.log("el valor anterior convertido a kilometros es"+ kilometros + "km");

//problema 5

var minutos;
var costo;

minutos=prompt("por favor ingrese la duracion de su llamada");
costo=minutos*1*60*120;
console.log (" el valor de su llamada es "+ costo );

//problema 6

var precio
var horas

horas=prompt ("por favor ingrese las horas que duro la clase");
precio= 40000+25000*horas-1;
console.log ("el precio que debe cancelar por clases dadas es" + precio );

/*
 
1.  40000+25000*0

2.  40000+25000*1

3.   40000+25000*2

40000+25000*horas-1

*/