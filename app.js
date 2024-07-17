/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El Usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
    
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario == numeroSecreto);
  
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista hacemos una operación
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();

/*
function verificarNumero(){
    numero = parseInt(prompt("Ingrese un número"));
    if(numero>0){
        console.log("el número es positivo");
    } else if (numero<0){
        console.log("el número es negativo");
    } else {
        console.log("el número es cero");
    }
    return;
}
verificarNumero();
*/  

/*
function mostrarHola(){
    console.log("¡Hola, Mundo!");
}
mostrarHola();
*/

/*
function mostrarHolaNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaNombre("Alice");
*/

/*
function recibirNumero(numero){
    console.log(`${numero*2}`);
}
recibirNumero(12);
*/

/*
function calcularDoble(numero) {
    return numero * 2;
  }
  
  let resultadoDoble = calcularDoble(5);
  console.log(resultadoDoble);
*/

/*
function promedioNumeros(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}
let resultadoPromedio = promedioNumeros(2,4,9)
console.log(resultadoPromedio);
*/

/*function numeroMayor(numero1, numero2){
    if (numero1 > numero2){
        return numero1;
    } else 
        return numero2;
    }

let resultadoMayor = numeroMayor(2,4)
console.log(resultadoMayor);
*/

/*function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);
*/

/*
function MultiplicarNumeroMismo(numero){
    return numero*numero
}
let resultadoNumero = MultiplicarNumeroMismo(12)
console.log(resultadoNumero);
*/

/*function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;
  
    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  
  const numero = 5;
  const resultado = calcularDobleTriple(numero);
  console.log(resultado);

*/
/*function calcularIMC(altura, peso) {
    let imc = peso/(altura * altura);
    return imc;
}
let resultado = calcularIMC(4,6)
console.log(resultado);
*/
/*
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        return numero * calcularFactorial(numero-1);
    }
}
let numero = 0;
let fact = calcularFactorial(numero);
console.log(fact);
*/
/*
function convertirDolares(numdolares) {
    var cotizacionDolar = 3982.50;
    var conversion = cotizacionDolar * numdolares;
    return conversion;

}
//let valorDolares = 1;
let valorPesosCol = convertirDolares(1);
console.log(valorPesosCol);
*/
/*
function calcularAreaPerimetroRectangular(altura,anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log(area);
    console.log(perimetro);
    return area;
    return perimetro;
}
//let valorDolares = 1;
calcularAreaPerimetroRectangular(2,3);
*/
/*
function calcularAreaPerimetroCircular(radio) {
    const pi = 3.1416;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log(area);
    console.log(perimetro);
}
//let valorDolares = 1;
calcularAreaPerimetroCircular(2);
*/
/*
function tablaMultiplicar(numero) {
    for (var i = 1; i <=10; i++){
        var resultado = numero * i;
        console.log(resultado)
    }
}
//let valorDolares = 1;
tablaMultiplicar(2);
*/
/*
let listaGenerica = [];
*/
/*
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java','Ruby', 'GoLang');
console.log(lenguajesDeProgramacion);
*/
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python','Java','Ruby','GoLang'];
function mostrarLenguajesProgramacionInversa() {
    for (let i = lenguajesDeProgramacion.length - 1;i >= 0;i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
mostrarLenguajesProgramacionInversa();

