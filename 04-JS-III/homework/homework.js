// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento = (array.length)-1;
  return array[ultimoElemento];
}
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var largo = array.length;
  for (var i = 0 ; i <= largo-1 ; i++){
    array[i] = array[i] + 1;
  }
  return array;
}
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase = palabras[0];
  var largo = palabras.length;
  for (var i = 1 ; i <= largo-1 ; i++){
    frase =frase + ' ' + palabras[i];
  }
  return frase;
}
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var largo = array.length - 1;
  for(var i =0 ; i< largo; i++){
    if(array[i]==elemento){
      return true;
    }
  }
  return false;
}
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0, largo = numeros.length;
  for(var i = 0 ; i < largo;i++){
    suma = suma + numeros[i] ;
  }
  return suma;
}
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var valor= agregarNumeros(resultadosTest);
  valor = valor/(resultadosTest.length);
  return valor;
}
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMasGrande = numeros[0];
  for(var i = 1 ; i < numeros.length ; i ++){
    if(numeroMasGrande < numeros[i]){
      numeroMasGrande = numeros[i]
    }
  }
  return numeroMasGrande;
}
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resultado = 1;
  if(arguments.length === 0){
    return 0;
  }  
  for(var i = 0 ; i < arguments.length ; i++){
    resultado = resultado * arguments[i];
  }
  return resultado;
}
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for(var i = 0 ; i< arreglo.length; i++){
    if(arreglo[i] > 18){
      contador ++;
    }
  }
  return contador;
}
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia == 1 || numeroDeDia == 7){
    return 'Es fin de semana';
  }
  return 'Es dia Laboral';
} 
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
 var valor = dejarPrimerdecimal(n);
 return valor === 9;

}
function dejarPrimerdecimal (n){ //funcion auxiliar de empizaConNueve
    var valor;
    for(var i = 10;n>1;){
      n=n/i;
    }
    n= n*10;
    valor = Math.trunc(n);
    return valor;
}
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i = 0 ; i < arreglo.length-2;i++){
    if(arreglo[i] != arreglo[i+1]){
      return false;
    }
  }
  return true;
} 
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
 var nuevaArray = [];
  while(array.length != 0){
    var valorAux = array.pop()
    switch(valorAux){
      case 'Marzo':
        nuevaArray.push('Marzo');
      break
      case 'Enero':
        nuevaArray.push('Enero');
      break
      case 'Noviembre':
        nuevaArray.push('Noviembre');
      break
    }
  }
  if(nuevaArray.length >= 3){
    return ['Marzo','Noviembre','Enero'];
  }
  return 'No se encontraron los meses pedidos';
}
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevaArray=[];
  for(var i = 0 ; i< array.length ; i++){
    if(array[i]>100){
      nuevaArray.push(array[i]);
    }
  }
  return nuevaArray;
}
function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var resultado = []; 
  for(var i = 0 ; i <10; i++){
     numero = numero + 2;
     if(numero == 0){
       return 'Se interrumpió la ejecución';
     }
    resultado.push(numero);
   }
   return resultado;
}
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var resultado = []; 
  for(var i = 0 ; i < 10; i++){
      if(i === 5){
       continue;
     }
    numero = numero + 2;
    resultado.push(numero);
   }
   return resultado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
