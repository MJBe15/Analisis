//Punto 1
console.log ("Punto 1");

var numero1=parseInt(prompt("Ingrese un numero"));
 var numero2=prompt ("Ingrese otro numero");
 var sumatoria=0
 if(numero1>numero2){
     var termina=numero1;
     var inicio=numero2;
 }else{
     termina=numero2;
     inicio=numero1;
 }
 for(var i=inicio; i<=termina; i++){
    console.log(i)
   }


//Punto 2
   console.log ("Punto 2");

   var tablas=prompt("Ingrese un numero");
 var aumenta
 for(var i=0; i<=10; i++){
    
    console.log(tablas + "x" + i + "=" + tablas*i)

    }

//Punto 3
    console.log ("Punto 3");

   var tablas2=prompt("Ingrese un numero");
   var finalTablas=prompt("Ingrese un numero para que sea limite ")
 var aumenta2
 for(var i=0; i<=finalTablas; i++){
    
    console.log(tablas2 + "x" + i + "=" + tablas2*i);

    }

 //Punto 4
    console.log ("Punto 4");

var arregloNum=[]

for (var i=0; i<10; i++){
    var numero4=prompt("Ingrese 10 numeros ");
    arregloNum.push(numero4);
}
console.log (arregloNum);
var mayor4=0;

for (var i=0; i<=arregloNum.length; i++){
   if(mayor4 < arregloNum[i] ) 
  mayor4 = arregloNum[i];
}

console.log( "el numero mayor es " + mayor4);


//Punto 5
console.log("Punto 5");

var arregloProductos=[] 
var nombreProducto; 
var arregloprecio=[] 

for(var i=1; i<=5; i++){ 
    nombreProducto=prompt("Ingrese productos de su preferencia " + i) 
    arregloProductos.push(nombreProducto); 
}
console.log (arregloProductos);

for(var i=0; i<arregloProductos.length; i++){ 
    var precioProducto=prompt("Ingrese el precio del producto " + arregloProductos[i]);
    arregloprecio.push(precioProducto);
}

//Punto 6
console.log("Punto 6");

var nombreArticulo = prompt("Ingrese el nombre de un producto para conocer el precio")

for(var i=0; i<arregloProductos.length; i++){
    if(arregloProductos[i]==nombreArticulo){
        console.log("el precio de " +nombreArticulo+" es $" +arregloprecio[i])
    }
}