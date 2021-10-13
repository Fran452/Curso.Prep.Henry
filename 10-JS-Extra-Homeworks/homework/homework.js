// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for(clave in objeto){
    matriz.push([clave,objeto[clave]]);
  } 
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(let i =0 ; i<string.length ; i++){
    if(objeto[string[i]] === undefined){
      objeto[string[i]]= 1;
    }else{
      objeto[string[i]]++;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var mayus = "";
var minus = "";
  for(let i = 0 ; i<s.length ; i++){
    if(s[i]=== s[i].toUpperCase()){
      mayus = mayus + s[i];
    }else{
      minus = minus + s[i];
    }
  }
return mayus+minus;
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var divicion = str.split(" ");
var invertirdo = divicion.map(function(valor){
    return invertir(valor);
  });
var resultado = invertirdo.join(" ");
return resultado;

}

function invertir(valor){
  var valorIngertido = "";
  for(let i = valor.length-1 ; 0<=i ; i--){
    valorIngertido = valorIngertido + valor[i];
  }
  return valorIngertido;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroS = numero.toString();
  if(numeroS === invertir(numeroS)){
    return "Es capicua";
  }
  return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaStrign = "";
  var contador = 0;
  for(let i = 0 ; i < cadena.length ; i++){
    switch(cadena[i]){
      case "a":
      break;
      case "b":
      break;
      case "c":
      break;
      default:
        nuevaStrign = nuevaStrign + cadena[i];
    }
  }
  return nuevaStrign;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var listaOrdenada = [];
  var aux = arr[0];
  var indice = 0;
do{
  for(var j = 0; j < arr.length ; j++){
    if(aux.length>arr[j].length){
      aux= arr[j];
      indice = j;
      j= 0;
    }  
  }
  arr.splice(indice,1);
  listaOrdenada.push(aux);
  aux= arr[0];
  indice = 0;
}while(arr.length !== 0); 
return listaOrdenada;
}
var f = ["You", "are", "fre", "de"];
sortArray(f)



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var arregloAnd = [];
  var arregloCorto = [];
  var arregloLargo = [];
  
  if(arreglo1.length < arreglo2.length){
    arregloCorto = arreglo1;
    arregloLargo = arreglo2;
  }else{
    arregloCorto = arreglo2;
    arregloLargo = arreglo1;
  }
var aux=arregloCorto[0];
do{
  for(j=0; j<arregloLargo.length; j++){
    if(aux===arregloLargo[j]){
      arregloAnd.push(aux);
      break;
    }
  }
arregloCorto.splice(0,1);
aux=arregloCorto[0];  
}while(arregloCorto.length !== 0)
return arregloAnd;
}





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

