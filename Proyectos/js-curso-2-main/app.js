let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clickConsole(){
    console.log("El botón fue clicado");
}

function preguntaCiudad() {
    let ciudadBrasil = prompt("Introduzca el nombre de una ciudad de Brasil:");
    alert("Estuve en " + ciudadBrasil + " y me acordé de ti.");
}

function clickAlerta(){
    alert("Yo amo JS");
    Swal.fire("SweetAlert2 is working!");
}

function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    alert(primerNumero + "+" + segunNumero + "=" + resultado)
}