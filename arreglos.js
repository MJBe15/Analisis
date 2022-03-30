/* 
los arreglos son estructuras que almacenan información de culaquier tipo de dato es decir string,int, double, array, objetos. Los arreglos tienen operaciones tales como consultar, mofificar, insertar i eliminar.
*/
//Los arreglos se declaran con corchetes []//
//creación de arreglos
var arreglos = ["Juan", 14];
console.log (arreglos);
//arreglo de arreglos
var notasEstuiantes = [["Sofía",4.8],["Isa",4.6]];
console.log (notasEstuiantes);
//consultar contenido del arreglo
console.log(notasEstuiantes[0]);
console.log (notasEstuiantes[1][1]);
//modificar elementos
console.log (arreglos[0] + "tiene" + arreglos [1]);
arreglos[1]=15;
console.log (arreglos[0] + "tiene" + arreglos [1] + "años");


//modificar el 4.6
notasEstuiantes[1]=5.0;
console.log ("Isa obtuvo en su nota final"+notasEstuiantes[1]);

//Agregar elementos al arreglo
console.log("sin agregar"+ arreglos);
arreglos.push("10A");
console.log("Agregado"+arreglos);

//agregar elementos al arreglo desde el inicio
console.log ("sin agregar"+arreglos);
arreglos.unshift("Perez");
console.log("Agregado"+arreglos);

//Eliminar elementos al arreglo
console.log ("sin eleminar"+arreglos);
arreglos.pop(); //elimina el último
console.log("eleminado"+arreglos);

arreglos.shift(); //Elimina el primer elemento
console.log ("Elimina shift"+arreglos);

//ejercicio 
/*
1 crear el arreglo con los valores
-Análisis
-Tecnología
-Desarrollo
2 Cambiar Desarrollo por BBDD
3 Convertir el vector en:
-Introducción
-Análisis
-Tecnología
*/

//1
var arreglos = ["Análisis", "Tecnología", "Desarrollo"];
console.log ("punto 1: "+arreglos);
//2
arreglos[2]="BBDD";
console.log ("punto 2: "+arreglos);
3//
arreglos.unshift("Introducción");
arreglos.pop ();
console.log ("punto 3: "+arreglos);
