
//Punto 1
for(var i=0; i<11; i+=1){
   console.log (i);
    } 

//Punto 2
    for(var i=10; i>=1; i--){
        console.log (i);
         } 

//Punto 3
 var limite=prompt("Ingrese el límite");
 var sumatoria=0
 for(var i=0; i<=limite; i++){
     sumatoria+=i;
 }
console.log(sumatoria);

//Punto 4
var inicio=parseInt(prompt("Ingrese el inicio"));
 var fin=prompt ("Ingrese el fin");
 for(var i=inicio; i<=fin; i++){
  if(i%2==0){
      console.log(i);

  }
 }
     
//Punto 5

var arreglosNombres=[];
for (var i=0; i<5; i++){
    var nombre=prompt("Ingrese un nombre");
    arreglosNombres.push(nombre);
}
console.log (arreglosNombres);


for (var i=0; i<arreglosNombres.length;i++){
    console.log("el nombre "+i+" es "+ arreglosNombres[i]);
}

//Punto  7

var cantNotas = parseInt(prompt("Ingrese la cantidad"));
var arregloNotas=[];
for(var i=0; i<cantNotas; i++){
    var nota=parseFloat(prompt("nota"+(i+1)));
    arregloNotas.push(nota);
}

var sumatoria=0;
for(var i=0; i<cantNotas; i++){
    sumatoria+=arregloNotas[i];
}
var promedio=sumatoria/cantNotas;
console.log("el promedio de notas es " + promedio);