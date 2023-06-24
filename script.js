/***1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, 
 * en caso de contestar no, responder: “No te creo”.**/
// Solicitar al usuario que responda a la pregunta
let respuesta = prompt("¿Eres bellísimo/a?");

// Verificar la respuesta del usuario y mostrar la respuesta correspondiente
if (respuesta.toLowerCase() === "sí") {
  console.log("Ciertamente");
} else if (respuesta.toLowerCase() === "no") {
  console.log("No te creo");
} else {
  console.log("Respuesta inválida");
};
/**2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.**/
// Solicitar al usuario que ingrese un número
let num = prompt("Ingresa un número:");

// Verificar si el número es divisible entre 2
if (num % 2 === 0) {
  console.log(num + " es divisible entre 2");
} else {
  console.log(num + " no es divisible entre 2");
};
/**3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.**/
// Solicitar al usuario que ingrese un número
let num1 = prompt("Ingresa un número:");

// Verificar si el número es par
if (num1 % 2 === 0) {
  alert(num1 + " es un número par");
} else {
  alert(num1 + " no es un número par");
};
/**4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', 
en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.**/
// Solicitar al usuario que ingrese un número
let n = prompt("Ingresa un número:");

// Verificar si el número es par
if (n % 2 === 0) {
  alert(n + " es un número par");
} else {
  alert(n + " no es un número par");
};
/**5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.**/
// Solicitar al usuario que ingrese el primer número
let nu1 = parseFloat(prompt("Ingresa el primer número:"));

// Solicitar al usuario que ingrese el segundo número
let nu2 = parseFloat(prompt("Ingresa el segundo número:"));

// Verificar cuál de los dos números es menor
if (nu1 < nu2) {
  console.log(nu1 + " es menor que " + nu2);
} else {
  console.log(nu2 + " es menor que " + nu1);
};
/**PARA SABER CUANDO USAR 1,2 O 3 SIGNOS DE '=' https://www.uv.es/jac/guia/jscript/javascr04.htm#:~:text=Operadores%20de%20comparaci%C3%B3n,cuenta%20el%20tipo%20de%20dato.&text=Igualdad%20estricta%20(%3D%3D%3D)%20Hace%20lo,coincidan%20los%20tipos%20de%20datos.&text=Desigualdad%20(!%3D),que%20la%20igualdad%2C%20pero%20neg%C3%A1ndola**/
/**6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.**/
// Solicitar al usuario que ingrese el primer número
let numero1 = parseFloat(prompt("Ingresa el primer número:"));

// Solicitar al usuario que ingrese el segundo número
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Solicitar al usuario que ingrese el tercer número
let numero3 = parseFloat(prompt("Ingresa el tercer número:"));

// Verificar cuál de los tres números es el mayor
if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1 + " es el número mayor.");
} else if (numero2 > numero1 && numero2 > numero3) {
  console.log(numero2 + " es el número mayor.");
} else if (numero3 > numero1 && numero3 > numero2) {
  console.log(numero3 + " es el número mayor.");
} else {
  console.log("Dos o más números son iguales.");
};
/** 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje 
 *si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es 
 sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. **/
 // Solicitar al usuario que ingrese un día de la semana
let diaSemana = prompt("Ingresa un día de la semana:").toLowerCase();

// Verificar el día de la semana ingresado
if (diaSemana === "lunes") {
  console.log("Es lunes. Odio los lunes");
} else if (diaSemana === "viernes") {
  console.log("Es viernes y la musica lo sabe");
} else if (diaSemana === "sabado" || diaSemana === "domingo") {
  console.log("Amo los sabados de flojera");
} else {
  console.log("¿es martes, miercoles, jueves o domingo?");
};

/** 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar 
 *que el número efectivamente esté en ese rango, si no lo está imprima un mensaje 
 *de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, 
 “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10. **/
 // Solicitar al usuario una calificación
let calificacion = parseFloat(prompt("Ingresa una calificación (entre 1 y 10):"));

// Verificar si la calificación está en el rango válido
if (calificacion >= 1 && calificacion <= 10) {
  // Calificación en el rango válido
  if (calificacion < 6) {
    console.log("Reprobado");
  } else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Regular");
  } else if (calificacion === 9) {
    console.log("Bien");
  } else if (calificacion === 10) {
    console.log("Excelente");
  }
} else {
  // Calificación fuera del rango válido
  console.log("La calificación ingresada no está en el rango válido.");
};

/** 9. Escribe un programa que responda a un usuario que quiere comprar un 
 *helado en una conocida marca de comida rápida cuánto le costará en función 
 *del topping que elija.

El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.

En caso de no disponer del topping solicitado por el usuario,
el programa le indicará “no tenemos este topping, lo sentimos.” y a 
continuación le informará el precio del helado sin ningún topping. **/
// Solicitar al usuario que elija un topping
let topping = prompt("Elige un topping: (oreo, KitKat, brownie)");

// Convertir la entrada del usuario a minúsculas
topping = topping.toLowerCase();

// Definir los precios de los helados y toppings
let precioHelado = 50;
let precioOreo = 10;
let precioKitKat = 15;
let precioBrownie = 20;

// Calcular el precio total del helado según el topping elegido
if (topping === "oreo") {
  let precioTotal = precioHelado + precioOreo;
  console.log("El helado con topping de oreo cuesta " + precioTotal + " MXN.");
} else if (topping === "kitkat") {
  let precioTotal = precioHelado + precioKitKat;
  console.log("El helado con topping de KitKat cuesta " + precioTotal + " MXN.");
} else if (topping === "brownie") {
  let precioTotal = precioHelado + precioBrownie;
  console.log("El helado con topping de brownie cuesta " + precioTotal + " MXN.");
} else {
  console.log("No tenemos este topping, lo sentimos.");
  console.log("El helado sin ningún topping cuesta " + precioHelado + " MXN.");
};

/** 10. Un conocido portal de educación en tecnología está ofreciendo programas para 
 *aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona 
 *interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 

Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN

Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento
correspondiente al precio final.

Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.

Finalmente, además del precio mensual con descuento, indicar al usuario cuánto 
gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:

Course: 2 meses
Carrera 6 meses
Master: 12 meses **/

// Solicitar al usuario que elija un programa educativo
let programa = prompt("Elige un programa educativo: (Course, Carrera, Master)").toLowerCase();

// Solicitar al usuario si cuenta con alguna beca
let beca = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua)").toLowerCase();

// Definir los costos mensuales de los programas
let costoCourse = 4999;
let costoCarrera = 3999;
let costoMaster = 2999;

// Definir las duraciones de los programas en meses
let duracionCourse = 2;
let duracionCarrera = 6;
let duracionMaster = 12;

// Aplicar descuento según la beca elegida
let descuento = 0;
if (beca === "facebook") {
  descuento = 0.2;
} else if (beca === "google") {
  descuento = 0.15;
} else if (beca === "jesua") {
  descuento = 0.5;
}

// Calcular el costo mensual con descuento
let costoMensual = 0;
if (programa === "course") {
  costoMensual = costoCourse - (costoCourse * descuento);
} else if (programa === "carrera") {
  costoMensual = costoCarrera - (costoCarrera * descuento);
} else if (programa === "master") {
  costoMensual = costoMaster - (costoMaster * descuento);
}

// Calcular el costo total del programa
let costoTotal = 0;
if (programa === "course") {
  costoTotal = costoMensual * duracionCourse;
} else if (programa === "carrera") {
  costoTotal = costoMensual * duracionCarrera;
} else if (programa === "master") {
  costoTotal = costoMensual * duracionMaster;
};

// Mostrar el costo mensual con descuento y el costo total al usuario
console.log("El costo mensual con descuento es: " + costoMensual + " MXN");
console.log("El costo total del programa es: " + costoTotal + " MXN");

/** 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a 
 *la distancia recorrida por un vehículo con cargo extra por los litros consumidos, 
 *tomando en consideración lo siguiente:

Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” 
ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, 
si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
Considere qué:

total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. **/

// Solicitar al usuario el tipo de vehículo
let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús)").toLowerCase();

// Solicitar al usuario la distancia recorrida en kilómetros
let distanciaRecorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros"));

// Solicitar al usuario los litros consumidos
let litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos"));

// Variables para almacenar los precios y extras
let precioKilometro = 0;
let extraLitros = 0;

// Asignar el precio por kilómetro según el tipo de vehículo
if (tipoVehiculo === "coche") {
  precioKilometro = 0.20;
} else if (tipoVehiculo === "moto") {
  precioKilometro = 0.10;
} else if (tipoVehiculo === "autobús") {
  precioKilometro = 0.50;
};

// Calcular el extra por litros consumidos
if (litrosConsumidos <= 100) {
  extraLitros = 5;
} else {
  extraLitros = 10;
};

// Calcular el total a pagar
let totalPagar = (precioKilometro * distanciaRecorrida) + extraLitros;

// Mostrar el total a pagar al usuario
console.log("El total a pagar es: " + totalPagar.toFixed(2) + " MXN");
