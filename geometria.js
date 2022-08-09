//1.
function sumas (num1, num2){
    var resultadoS = num1 + num2
    return resultadoS;
}
function resta (num1, num2){
    var resultadoS = num1-num2
    return resultadoS;
}
function multiplicacion (num1, num2){
    var resultadoS = num1*num2
    return resultadoS;
}
function division  (num1, num2){
    var resultadoS = num1 / num2
   return resultadoS;
}
function potencia (num1, num2){
    var resultadoS = num1 ** num2
    return resultadoS;
}
 //2

function main_geometria(){
    var opcion = prompt (" Por favor, ingrese el numero de la operación que desea realizar: \n 1.Hallar Área de una figura \n 2.Hallar Perímetro de una figura");
    var opcion2 = prompt ("Por favor ingrese la figura que desea utilizar: \n 1. Paralelogramo \n 2. Triangulo");
    

    var numerito1 = parseFloat (prompt("Por favor ingrese la base de la figura"));
    var numerito2 = parseFloat (prompt("Por favor ingrese la altura de la figura"));
    if(opcion == 1){
        if(opcion2 == 1){
            console.log("El area del paralelogramo es " + multiplicacion(numerito1, numerito2));
        }else if(opcion2 == 2){
            var resultadoT =multiplicacion(numerito1, numerito2);
            console.log ("El area del triangulo es " +  division(resultadoT, 2));

        }
    }else if (opcion == 2){
        if(opcion2 == 1){
            var resultadoP =multiplicacion(numerito1, numerito1);
            var resultadoPE =multiplicacion(numerito2, numerito2);
            console.log("El perimetro del paralelogramo es " + sumas(resultadoP, resultadoPE));
        }else if(opcion2 == 2){
            var numerito3= parseFloat (prompt("Por favor ingrese el lado que falta del triangulo"));
            var resultadoPF =sumas(numerito1, numerito2);
            console.log ("El perimetro del triangulo es " +  sumas(resultadoPF,numerito3));

        }

    }
}


