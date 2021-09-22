const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNum = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

//const calculadora = new Calculadora ();

const display = new Display(displayValorAnterior, displayValorActual);

botonesNum.forEach(boton=> {
    boton.addEventListener("click", ()=> {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton=> {
    boton.addEventListener("click", ()=> {
        display.computar(boton.value);
    });
});