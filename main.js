var valorMenor = 0;
var valorMayor = 10;

const numeroSecreto = numeroAleatorio();

console.log("El numero dado por random es: " + numeroSecreto);

function numeroAleatorio(){
    return parseInt(Math.random() * valorMayor + 1);
}

const valor_dado = document.getElementById('numero');
var contenido = valor_dado.innerHTML;
console.log("El numero dado es: " + contenido)

const elementoMenorValor = document.getElementById("valor-mayor")
elementoMenorValor.innerHTML = valorMayor;

const elementoMayorValor = document.getElementById("valor-menor")
elementoMayorValor.innerHTML = valorMenor;

var mensaje = document.getElementById('que')
if(numeroSecreto == contenido){
    mensaje.innerText = "igual acertado"
    document.querySelector("body").style.background="red"
}else if(numeroSecreto < contenido){
    mensaje.innerText = "Menor"
}else{
    mensaje.innerText = "Mayor"
}