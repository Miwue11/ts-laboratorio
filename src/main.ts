// Tendrás que generar un número aleatorio que sea del 1 al 6.

// Si sale el dado 6, hemos perdido la partida, has sacado un 6, has perdido. En caso contrario seguiremos tirando hasta llegar a 50 puntos o más has obtenido 50 puntos o mas, has ganado la partida.

// En cualquier momento podrás plantarte, y mostrar el mensaje Te has plantado, tienes x puntos.

// Muestra dichos mensajes en el html.

// Create un proyecto donde generes el código con el juego (acuerdate de dividir el código, que cada función haga una cosa y solo una cosa...)
// Del ejercicio anterior create otro proyecto donde separes el código en modelo, motor y ui.
// En el último proyecto usaremos el caso anterior para aplicar testing a las funciones de motor.

// Extra:
// Tanto si has ganado o perdido al partida, bloquear el botón de tirar dado y el de plantarse
// Si me planto, el botón de tirar también se bloqueará y de la misma manera el de plantarse.
// Añade un css para darle estilado a tu html.

const plantarse = document.getElementById("plantarse") as HTMLButtonElement;
const intentosDiv = document.getElementById("intentos") as HTMLDivElement;
const dadoImg = document.getElementById("dado") as HTMLImageElement;
const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
const mensajeDiv = document.getElementById("mensaje") as HTMLDivElement;


let total = 0;
let gameActive = true;

const perder=()=> {
    resultadoDiv.textContent = "Has perdido. Has sacado un 6.";
    gameActive = false;
    if(boton instanceof HTMLButtonElement)
    boton.disabled = true;
    plantarse.disabled = true;
};

const ganar=()=> {
    resultadoDiv.textContent = "¡Felicidades! ¡Has ganado con 50 puntos o más!";
    gameActive = false;
    if(boton instanceof HTMLButtonElement)
    boton.disabled = true;
    plantarse.disabled = true;
    }


const actualizarIntentos=()=> {
    intentosDiv.textContent = `Puntuación: ${total}`;
}

const actualizarDado=(valor: number)=> {
    switch(valor){  
        case 1:
            dadoImg.src = `https://media.tenor.com/tCq5mfycACMAAAAi/d20-dice-roll.gif`;
            dadoImg.alt = `Dado mostrando 1`;
            break;
        case 2:
            dadoImg.src = `https://media.tenor.com/zTg9FhOqpDIAAAAi/d20-dice-roll.gif`;
            dadoImg.alt = `Dado mostrando 2`;
            break;
        case 3:
            dadoImg.src = `https://media.tenor.com/8UcqJlc93EgAAAAi/d20-dice-roll.gif`;
            dadoImg.alt = `Dado mostrando 3`;
            break;
        case 4:
            dadoImg.src = `https://media.tenor.com/l-95tTbEKGkAAAAm/d20-dice-roll.webp`;
            dadoImg.alt = `Dado mostrando 4`;
            break;
        case 5:
            dadoImg.src = `https://media.tenor.com/r7bAmy9lpJUAAAAm/d20-dice-roll.webp`;
            dadoImg.alt = `Dado mostrando 5`;
            break;
        case 6:
            dadoImg.src = `https://media.tenor.com/HEHpab5WZHwAAAAm/d20-dice-roll.webp`;
            dadoImg.alt = `Dado mostrando 6`;
            break;
        default:
            break;
}};


function eventos(){
    if(boton instanceof HTMLButtonElement){
boton.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 6) + 1;
    actualizarDado(numero);

    total += numero;
    actualizarIntentos();

    if (numero === 6) {
        perder();
    }
    if (total >= 50) {
        ganar();
    }
});

if(plantarse instanceof HTMLButtonElement){
    plantarse.addEventListener("click", () => {
        if (!gameActive) return; 
    
    resultadoDiv.textContent = `Te has plantado con ${total} puntos.`;
    boton.disabled = true;
    plantarse.disabled = true;
    gameActive = false;
    });
        };
};}

eventos();