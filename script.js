/////////////////////// EJERCICIO 1 ///////////////////////////////////////
// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.

// var consulta  = prompt("¿cómo está el día de hoy? (soleado, nublado, lloviendo)");

// alert("El dia de hoy esta " + consulta);

////////////////////////////////  EJERCICIO 2 //////////////////////////////////

// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

// var radio = parseInt(prompt("Ingrese el valor de radio"));
// var area = Math.PI * radio*radio;
// var perimetro = 2*Math.PI*radio;
// alert("El area de la circunsferencia es " + area);
// alert("El perimetro de la circunsferencia es " + perimetro);

////////////////////////////////// EJERCICIO 3 ////////////////////////////////

// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// edad se debe mostrar un mensaje indicándolo.

// var edad = parseInt(prompt("Ingrese su edad"))
// if (edad>18) {
//     alert("Usted es mayor de edad");
// } else {alert("Usted es menor de edad")
// }

//////////////////////////////// EJERCICIO 4 ////////////////////////////////////////

// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.

// var respuesta = prompt("Ingrese solo la opcion S o N");
// if (respuesta=="S" || respuesta=="N") {
//     alert("CORRECTO")
// } else {
//     alert("INCORRECTO")
// }

////////////////////////////////  EJERCICIO 5 ///////////////////////////////////////

// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

// var op = prompt("Ingrese alguna de las operaciones basicas de matematicas s/r/m/d");
// var num1 = parseInt(prompt("Ingrese el primer numero"));
// var num2 = parseInt(prompt("Ingrese el segundo numero"));

// switch (op) {
//     case "s":
//     case "S":
//         resultado = num1 + num2;
//         alert("El resultado es " + resultado);
//         break;
//     case "r":
//     case "R":
//         resultado = num1 - num2;
//         alert("El resultado es " + resultado);
//         break;
//     case "m":
//     case "M":
//         resultado = num1 * num2;
//         alert("El resultado es " + resultado);
//         break;
//     case "d":
//     case "D":
//         resultado = num1 / num2;
//         alert("El resultado es " + resultado);
//     default:
//         break;
// }

////////////////////// EJERCICIO 6 /////////////////////////////////////////////

// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.

// var num = parseInt(prompt("Ingrese un numero para determinar si es par o impar"));

// if (num == 0) {
//     alert("El numero no es par o impar");
// } else {
//     if (num % 2 == 0) {
//         alert("El numero es par");
//     }else {
//         alert("El numero es impar");
//     }

// }

/////////////////////////////////// EJERCICIO 7  ////////////////////////////////////

// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.

// var limite = parseInt(prompt("Ingrese un valor limite"));

// var num = 0;
// var num1 = 0;
// while (num1<=limite) {
//     num = parseInt(prompt("Ingrese un numero"));
//     num1 += num;
// }
// alert("La suma de los numeros ingresados supera el limite")

///////////////////////////////// EJERCICIO 8 //////////////////////////////////

// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.

// var num = parseInt(prompt("Ingrese un numeros enteros y finalice con el numero 0"));
// var max = 0;
// var min = num;
// var suma = 0;
// var cant=0;

// if (!Number.isInteger(num)) {
//     alert("El numero ingresado no es un numero entero");
// } else {
//     while (num!=0) {
//         cant++;
//         suma = num + suma;
//         if (max<num) {
//             max=num;
//         }
//         if (min>num) {
//             min=num;
//         }

//         num = parseInt(prompt("ingrese otro numero"));
//     }

//     alert("El numero maximo ingresado es " + max);
//     alert("El numero minimo ingresado es "+ min);
//     alert("El promedio de los numeros ingresados es " + (suma/cant));

// }

////////////////////////////////////////  EJERCICIO 9 /////////////////////////////////////////

// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring().

//-------------------ejercicio 11----------------------------
//Escribir una función que reciba un String y devuelva la palabra más larga.
//String Ejemplo: “Guia de JavaScript”
//Resultado esperado : “JavaScript”
// var frase = prompt("Ingrese una frase very long");
// let array = frase.split(" ");
// let max = 0;
// let palabra;
// for(let p of array){
//     let l = p.length;
//     if(max<l){
//         max=l;
//         palabra=p;
//     }
// }
// console.log(`La palabra mas long es "${palabra}"`);

//////////////////////////////////////// EJERCICIO 12 ////////////////////////////

// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
// dato.

// var frase = prompt("Ingrese una frase.");
// console.log("El tipo de dato es "+ typeof (frase));

/////////////////////////////////////// EJERCICIO 13 //////////////////////////////////

// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

// var persona = {
//     nombre : "Pepe",
//     edad : 35,
//     sexo : "H",
//     peso : 70,
//     altura : 1.60,

// };

// console.log(persona);

/////////////////////////// EJERCICIO 14 ///////////////////////////////////////

// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

// function Libro() {
//     this.ISBN = '';
//     this.titulo = '';
//     this.autor = '';
//     this.numeroPaginas = 0;

//   }

//   mostrarInformacion() = function(miLibro) {
//     console.log('ISBN: ' + miLibro.ISBN);
//     console.log('Título: ' + miLibro.titulo);
//     console.log('Autor: ' + miLibro.autor);
//     console.log('Número de páginas: ' + miLibro.numeroPaginas);
//   };

//   cargarLibro = function(l) {
//     l.ISBN = prompt('Ingrese el número de ISBN del libro:');
//     l.titulo = prompt('Ingrese el título del libro:');
//     l.autor = prompt('Ingrese el nombre del autor del libro:');
//     l.numeroPaginas = parseInt(prompt('Ingrese el número de páginas del libro:'));
//   };

// var miLibro = new Libro();

// cargarLibro(miLibro);

// mostrarInformacion(miLibro);

// // tambien se puede hacer sin el constructor ni el new libro.:*************************

// function Libro() {
//     this.ISBN = '';
//     this.titulo = '';
//     this.autor = '';
//     this.numeroPaginas = 0;
//   }

//   cargarLibro = function(x) {
//     x.ISBN = prompt('Ingrese el número de ISBN del libro:');
//     x.titulo = prompt('Ingrese el título del libro:');
//     x.autor = prompt('Ingrese el nombre del autor del libro:');
//     x.numeroPaginas = parseInt(prompt('Ingrese el número de páginas del libro:'));
//   };
//   mostrarInformacion = function(x) {
//     console.log('ISBN: ' + x.ISBN);
//     console.log('Título: ' + x.titulo);
//     console.log('Autor: ' + x.autor);
//     console.log('Número de páginas: ' + x.numeroPaginas);
//   };

// var miLibro = new Libro();

// // let miLibro = {
// //   ISBN : 0,
// //   titulo : "",
// //   autor : "",
// //   numeroPaginas : 0,
// // };

// cargarLibro(miLibro);

// mostrarInformacion(miLibro);

//-------------------

// Definir el objeto Libro
// let Libro = {
//     ISBN: "",
//     Titulo: "",
//     Autor: "",
//     NumeroPaginas: 0,

//     // Método para cargar los datos del libro
//     cargarLibro: function() {
//       this.ISBN = prompt("Ingrese el número de ISBN:");
//       this.Titulo = prompt("Ingrese el título del libro:");
//       this.Autor = prompt("Ingrese el autor del libro:");
//       this.NumeroPaginas = parseInt(prompt("Ingrese el número de páginas:"));
//     },

//     // Método para mostrar los datos del libro
//     mostrarLibro: function() {
//       console.log("ISBN: " + this.ISBN);
//       console.log("Título: " + this.Titulo);
//       console.log("Autor: " + this.Autor);
//       console.log("Número de páginas: " + this.NumeroPaginas);
//     }
//   };

//   // Cargar los datos del libro
//   Libro.cargarLibro();

//   // Mostrar los datos del libro
//   Libro.mostrarLibro();

///////////////////////////// EJERCICIO 15 /////////////////////////

// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.

// var circulo = {
//     radio : 0,
// };

// crearCirculo = function(circulo)  {
//     circulo.radio = parseInt(prompt("Ingrese el radio"))
// };

// area = function(circulo) {
//     console.log(Math.PI * circulo.radio*circulo.radio);
// };

// perimetro = function(circulo) {
//     console.log(2*Math.PI*circulo.radio);
// };

// crearCirculo(circulo);
// perimetro(circulo);
// area(circulo);

////////////////////////////// EJERCICIO 16 ////////////////////////////////

// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

// var vector1 = [];
// var vector2 = [];

// for (let i = 0; i < 5; i++) {
//     var numAleatorio = Math.random()*100;
//     vector1[i] = numAleatorio;
// }

// for (let i = 0; i < 5; i++) {
//     var numAleatorio1 = Math.random()*100;
//     vector2[i] = numAleatorio1;
// }

// console.log(vector1);
// console.log(vector2);

/////////////////////////////// EJERCICIO 17 /////////////////////////

// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado

// var vector = [1, 2, 3, 4, 5, 6];

// vector.pop();
//vector.pop();

// console.log(vector);

/////////////////////////////// EJERCICIO 18 /////////////////////////////

// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

// Punto A ////
// var valores = [true, 5, false, "hola", "adios", 2];
// var palabras = [];
// for (let i = 0; i < valores.length; i++) {
//   if (typeof valores[i] === "string") {
//     palabras.push(valores[i]);
//   }
// }
// var palabraMayor = palabras[0];
// for (let i = 1; i < palabras.length; i++) {
//   if (palabras[i - 1].length < palabras[i].length) {
//     palabraMayor = palabras[i];
//   }
// }
// console.log("La palabra mayor es " + palabraMayor);

////---------------------------------------------- alternativa punto A

// var valores = [true, 5, false, "hola", "adios", 2];
// let max = 0;
// let palabra;
// for (let p of valores) {
//     if (typeof p === "string") {
//         let l = p.length;
//         if(max<l){
//           max=l;
//           palabra=p;}
//     }
// }
// console.log(palabra);

// Punto B ////
// var valores = [true, 5, false, "hola", "adios", 2];
// var pos = 0;
// valores.forEach((e) => {
//     pos++;
//     if (e === true) {
//         console.log("El valor es " + e + " en la posicion " + pos);
//     } else {
//         if (e === false) {
//             console.log("El valor es " + e + " en la posicion " + pos);
//         }
//     }
// });

///------alternativa punto B -----
// for (let r of valores) {
//     if(typeof r === "boolean"){
//         console.log("Su respuesta es: "+r);
//     }
// }

// Punto C ////

// var valores = [true, 5, false, "hola", "adios", 2];
// var numeros = [];
// for (let i = 0; i < valores.length; i++) {
//     if (typeof valores[i] === "number") {
//         numeros.push(valores[i]);
//     }
// }

// var suma = 0;
// var resta = numeros[0];
// var multiplicación = numeros[0];
// var division = numeros[0];
// var potencia = numeros[0];

// for (let i = 0; i < numeros.length; i++) {
//     suma += numeros[i];
//     if (i>0) {
//         resta -= numeros[i];
//         multiplicación *= numeros[i];
//         division /= numeros[i];
//         potencia = Math.pow(potencia, numeros[i]);
//     }
// }
// console.log("La suma de los elementos del vector es " + suma);
// console.log("La resta de los elementos del vector es " + resta);
// console.log("La multiplicacion de los elementos del vector es " + multiplicación);
// console.log("La division de los elementos del vector es " + division);
// console.log("La potencia de los elementos del vector es " + potencia);

//////////////////// EJERCICIO 19 //////////////////////////

// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.

// var A = new Array(50);
// var B = new Array(20);

// for (let i = 0; i < A.length; i++) {
//     let a = Math.round(Math.random()*100);
//     A[i] = a;
// }
// console.log(A);

// function compararNumeros(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }

// A.sort(compararNumeros);

// console.log(A);

// B = (A.slice(0, 20));
// for (let i = 10; i < B.length; i++) {
//     B[i] = 0.5;
// }
// console.log(B);

/////////////////// EJERCICIO 20 //////////////////////

// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].

// var matriz = [[3], [6], [9], [12], [15]];

// // for (let i = 0; i < 5; i++) {
// //     matriz[0].push((i+1)*3);

// //     }

//     console.log(matriz);

// for (let i = 0; i < 5; i++) {
//     matriz[0][i] = ((i+2)*3)

// }

// console.log(matriz);


//alternativa ----------- 

//array.push(matriz[i][0] + 3);  Esto ponerlo dentro del for


///////////////////// EJERCICIO 21 ////////////////////////////////////////////

// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

// var persona = {
//     nombre: "Gabriel",
//     edad: "34",
//     sexo: "M",
//     peso: 63,
//     altura: 176
// };

// console.log(Object.values(persona)); // traemos los valores de las propiedades del JSON en un array,
//sino ponemos Object.keys traemos las propiedades

//////////////////////// EJERCICIO 22 //////////////////////////////////////////////

// Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
// elección.
//ver pagina 58/////
// function Bienvenido() {
//     let nombre = prompt("Ingresa tu nombre");
//     alert( `Bienvenido ${nombre}`);
// }

// ------ alternativa Mauri
// document.getElementById("boton").onclick= function() {
//     alert("WARNNING < THIRD IMPACT INMINENT > WARNNING")
// }

//////////////// EJERCICIO 23 ////////////////////////

// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo
//     amarillo, por ejemplo)

// let id = document.getElementById("resaltar");
// var lorem = id.textContent;

// var palabras = lorem.split(" ");
// console.log(palabras);

// for (let i = 0; i < palabras.length; i++) {
//     if (palabras[i].length>8) {
//         palabras[i] = '<mark>'+ palabras[i] + '</mark>';
//     }
// }

// id.innerHTML = palabras.join(" ");


//-------------- alternativa

// function resaltar() {
//     let parrafo = document.getElementById("parrafo");
//     let palabras = parrafo.innerHTML.split(" ");
//     let texto = "";
//     for (let i = 0; i < palabras.length; i++) {
//         if (palabras[i].length > 8) {
//             texto += "<span style='background-color: yellow'>" + palabras[i] + "</span> ";
//         } else {
//             texto += palabras[i] + " ";
//         }
//     }
//     parrafo.innerHTML = texto;
// }


////////////////////////// EJERCICIOS 24 ///////////////////////////////////////

//     Escribir un programa de JavaScript que a través de un formulario calcule el radio de un
// circulo y lo muestre en el HTML.

// function calcularRadio() {
//     let perimetro = document.getElementById("calculoRadio").value;
//     let resultado = perimetro/(2*Math.PI);
//     document.getElementById("radio").innerHTML = "El valor del radio es " + resultado;
// }

///////////////////////////////////     EJERCICIO 25 //////////////////////////////////

// Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
// siguiente formulario.
// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
// <title>Obtener nombre y apellido de form </title>
// </head><body>
// <form id="form1" onsubmit="getFormValores()">
// Nombre: <input type="text" name="nombre" value="David"><br>
// Apellido: <input type="text" name="apellido" value="Beckham"><br>
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>
// function getFormValores(event) {
//     event.preventDefault();
//   let nombre = document.getElementById("nombreI").value;
//   let apellido = document.getElementById("apellidoI").value;

//   document.getElementById("nombreApellido").innerHTML = "Muchas gracias " + nombre + " " + apellido;
// }

// alternativa   

// function getFormValores() {
//     let formulario = document.getElementById("form1");
//     let nombre = formulario.nombre.value;
//     let apellido = formulario.apellido.value;
//     console.log(nombre + " " + apellido);
// }



