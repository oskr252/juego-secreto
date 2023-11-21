let numeroSecreto = 0;
let numeroMaximo = 10;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntentos() {
    let numeroDeUSuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroSecreto === numeroDeUSuario) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else if (numeroDeUSuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor.');
        limpiarCaja();
    } else {
        asignarTextoElemento('p', 'El número secreto es mayor.');
        limpiarCaja();
    }
    intentos ++;

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles, recarge la página.')
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();//Recursividad
        } else {
            listaNumerosSorteados.push(numeroGenerado);//Añade un numero al arreglo o lista
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Colocar condiciones Iniciales
    condicionesIniciales();
    document.getElementById('intentar').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();