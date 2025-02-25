

// const intentosDiv = document.getElementById("intentos") as HTMLDivElement;
// const dadoImg = document.getElementById("dado") as HTMLImageElement;
// const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
// const mensajeDiv = document.getElementById("mensaje") as HTMLDivElement;


// let total = 0;
// let gameActive = true;


// const actualizarIntentos=()=> {
//     intentosDiv.textContent = `Puntuación: ${total}`;
// }


// const actualizarDado=(valor: number)=> {

//     dadoImg.src = `./src/images/dado${valor}.png`;
//     dadoImg.alt = `Dado mostrando ${valor}`;
// }
// if(boton instanceof HTMLButtonElement){
// boton.addEventListener("click", () => {


//     const numero = Math.floor(Math.random() * 6) + 1;
//     actualizarDado(numero);

//     total += numero;
//     actualizarIntentos();


//     if (total === 21) {
//     resultadoDiv.textContent = "¡Felicidades! ¡Has ganado con 21 puntos!";
//     gameActive = false;
//     } else if (total > 21) {
//     resultadoDiv.textContent = `Has perdido. Tu puntuación es ${total} y te has pasado de 21.`;
//     gameActive = false;
//     }
// });

// if(plantarse instanceof HTMLButtonElement){
// plantarse.addEventListener("click", () => {
//     if (!gameActive) return; 
    
//     resultadoDiv.textContent = `Te has plantado con ${total} puntos.`;
//     gameActive = false;
// }
// );
// };
// };
