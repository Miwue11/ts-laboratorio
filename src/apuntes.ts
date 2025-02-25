// var pi= Math.PI;
// var r= 4;
// var area= pi * r ** 2;

// console.log('Area of circle with radius 4 is: ', area);

//----------------------------------------------//

// let nombre="Juan"; //ya se queda como string ty no es mutable
// let apellido="Perez";

// nombre= "Juan Carlos";//no podemos poner un int o un float, solo string

// console.log(nombre, apellido);


//----------------------------------------------//
// let nombre;

// nombre= 23;

// console.log(nombre); //23, ahora si podemos poner un int o un float, ya que no se le asigno un tipo de dato


//----------------------------------------------//

// let nombre: string; //ya se queda como string y no es mutable

// let nombre2:string|null =null //ahorsa deja añadir con el OR cualquier parametro por ejemplo null


// let edad:string|number = 23;

// edad ="hola";

// console.log(edad); //hola, ahora si podemos poner un int o un float, ya que no se le asigno un tipo de dato



//usamos el any para poder usar any tipo de dato (es peligroso)
// let nombre: any = "Juan"; 

// nombre=23;
// console.log(nombre); //23, ahora si podemos poner un int o un float, ya que no se le asigno un tipo de dato




//interface
// interface Cliente{
//     nombre: string;
//     apellido: string;
//     edad: number;
// }

// const clienteA: Cliente={
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 23
// }

// const clienteB: Cliente={
//     nombre: "Carlos",
//     apellido: "Gonzalez",
//     edad: 25
// }

// clienteA.edad=24;
// clienteB.edad=26;

// console.log(clienteA); //24
// console.log(clienteB); //26




// interface Pelicula{
//     titulo: string;
//     director: string;
//     año: number;
// }

// const peliculaA: Pelicula={
//     titulo: "Blade Runner",
//     director: "Ridley Scott",
//     año: 1982
// }

// const peliculaB: Pelicula={
//     titulo: "Matrix",
//     director: "Lana Wachowski",
//     año: 1999
// }

// console.log(peliculaA);
// console.log(peliculaB);



//-------------------------------------------------------------
// const areaDelCirculo=(r:number):number=>{ 
//     const pi= Math.PI;
//     return pi * r ** 2;
// }
// const areaC:number= areaDelCirculo(4);
// console.log(areaC)


// const areaDelCuadrado= (l:number):number=>
//     l*l;

// const areaCu:number= areaDelCuadrado(10);
// console.log(areaCu)


// function areaDelTriangulo(b:number,a:number):number{
//     return b*a/2;
// }
// const areaT:number= areaDelTriangulo(4,5);
// console.log(areaT)



//-------------------------------------------------------------



//FUNCION DE LA RECETA DE ENSALADA

// const lechuga="🥬 lechuga";
// const setas="🍄 setas";
// const alubias="🫘 alubias";
// const cebolla="🧅 cebolla";
// const maiz="🌽 maiz";
// const arandanos="🫐 arandano";
// const aceitunas="🫒 aceitunas";
// const piña="🍍 piña";
// const mango="🥭 mango";
// const zanahoria="🥕 zanahoria";
// const tomate="🍅 tomate";
// const pepino="🥒 pepino";
// const aguacate="🥑 aguacate";
// const bacon="🥓 bacon";
// const huevos="🥚 huevo";
// const queso="🧀 queso";
// const pollo="🍗 pollo";
// const nueces="🌰 nueces";

// function pintaReceta(titulo:string,ingredientes:string,preparacion:string):void

// {
//     const estiloTitulo="color:red; font-size:18px";
//     const estiloIngredientes="color:green; font-size:14px";
//     const estiloPreparacion="color:indigo; font-size:12px; font-style:italic";
//     //TITULO
//     console.log(`%c${titulo}`, estiloTitulo);
//     //INGREDIENTES
//     console.log(`%c-Ingredientes: ${ingredientes}`,estiloIngredientes);
//     //PREPARACION
//     console.log(`%c-Preparacion: ${preparacion}`,estiloPreparacion);
// }

// console.log("*********************")
// console.log(pintaReceta("Ensapada con alubias, aguacate y huevo",`${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,`cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.`));  
// console.log("*********************")


// console.log(pintaReceta("Ensalada de setas y bacon",`${setas}, ${bacon}, ${lechuga}, ${tomate}, ${cebolla}, ${queso}`,`saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de arándanos y pollo",`${arandanos}, ${pollo}, ${lechuga}, ${zanahoria}, ${queso}, ${nueces}`,`mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de maíz y piña",`${maiz}, ${piña}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,`mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.`));
// console.log("*********************")

// console.log(pintaReceta("Ensalada de mango y queso feta",`${mango}, ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,`mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.`));

// //----------------------------------------------//


// function sumar(){
//     //leer los valores de los imputs------le quitamos el posible valor de NULL con el (as HTMLInputElement)
//     const sumando1= (document.getElementById("sumando1")as HTMLInputElement).value;
//     const sumando2= (document.getElementById("sumando2")as HTMLInputElement).value;
//     //sumar los valores
//     const resultado=parseInt(sumando1)+parseInt(sumando2);
//     //mostrar el resultado
//     const resultadoElement=document.getElementById("resultado");
//     if (resultadoElement !==null && resultadoElement !== undefined) //ponemos la condicion de que si es diferente de null y undefined, que lo muestre
//     resultadoElement.innerHTML=resultado.toString();
// }

// const botonSumar=document.getElementById("sumar");
//     if (botonSumar !==null && botonSumar !== undefined) //ponemos la condicion de que si es diferente de null y undefined, que lo muestre
// botonSumar.addEventListener("click",sumar);


//------------------------------------------------//

// function cambiarFotoPrincipal(idMiniatura:string):void{
//     const fotoPrincipal=(document.getElementById("foto-principal"));
//     const miniatura=document.getElementById(idMiniatura);
//     if(fotoPrincipal instanceof HTMLImageElement && miniatura instanceof HTMLImageElement)
//     fotoPrincipal.src=miniatura.src;
// }

// const miniatura1=(document.getElementById("miniatura1")as HTMLImageElement);
// const miniatura2=(document.getElementById("miniatura2")as HTMLImageElement);
// const miniatura3=(document.getElementById("miniatura3")as HTMLImageElement);
// const miniatura4=(document.getElementById("miniatura4")as HTMLImageElement);
// const miniatura5=(document.getElementById("miniatura5")as HTMLImageElement);

// if (miniatura1 && miniatura2 && miniatura3 && miniatura4 && miniatura5 !==null
//     && miniatura1 && miniatura2 && miniatura3 && miniatura4 && miniatura5 !== undefined){
//     miniatura1.addEventListener("click",()=>cambiarFotoPrincipal("miniatura1"));
//     miniatura2.addEventListener("click",()=>cambiarFotoPrincipal("miniatura2"));
//     miniatura3.addEventListener("click",()=>cambiarFotoPrincipal("miniatura3"));
//     miniatura4.addEventListener("click",()=>cambiarFotoPrincipal("miniatura4"));
//     miniatura5.addEventListener("click",()=>cambiarFotoPrincipal("miniatura5"));
// }

//------------------------------------------------//

// class Cliente{
//     nombre:string="";

//     constructor(nombre:string){
//         this.nombre=nombre;
//     }
// }

// let miNumero:any=2;
// let miObjeto:Cliente=new Cliente("Juan");

// miNumero instanceof Object; //false
// miObjeto instanceof Object; //true

// console.log(miNumero instanceof Object);
// console.log(miObjeto instanceof Cliente);




type Estado =
    |"noEsNum"
    |"esNumMayor"
    |"esNumMenor"
    |"esNumFueraDeRango"
    |"esNumSecreto"
    |"perder";

let numeroParaAdivinar:number = Math.round(Math.random() * 100);
console.log(numeroParaAdivinar);
let mensaje:string="";
let intentos:number=5;
let finIntentos=0

const intentosR=()=>
{const intentosR = document.getElementById("intentos") as HTMLElement;
intentosR.innerHTML=`Vas a tener solo ${intentos} intentos`;}

intentosR();

const apagarBoton=()=>{
    if(boton instanceof HTMLButtonElement)
        boton.disabled=true;
}

const muestraMensajeDeComprobacion=(texto:string,estado:Estado)=>{
    switch(estado){
        case "noEsNum":
            mensaje="Debes introducir un número";
            break;
        case "esNumMayor":
            restarIntentos();
            if(intentos===finIntentos)
            return; 
            mensaje=`El número es mayor que ${texto}`;
            break;
        case "esNumMenor":
            restarIntentos();
            if(intentos===finIntentos)
            return; 
            mensaje=`El número es menor que ${texto}`;
            break;
        case "esNumFueraDeRango":
            mensaje="El número debe estar entre 1 y 100";
            break;
        case "esNumSecreto":
            mensaje="¡Has acertado!";
            apagarBoton();
            break;
        case "perder":
            mensaje="Has perdido, el numero era "+numeroParaAdivinar;
            break;
        default:
            mensaje="Error";
            break;
    }
    const resultado= document.getElementById("resultado")as HTMLElement;
    resultado.innerHTML=mensaje;
};

const compruebaNumeroSecreto=(texto:string)=>{
    const numero = parseInt(texto);
    const esNum=!isNaN(numero);
    if (!esNum){
        return "noEsNum";
    }
    if (numero<1 || numero>100){
        return "esNumFueraDeRango";
    }
    return (numero===numeroParaAdivinar&&intentos>0)
        ?   "esNumSecreto"
        :  (numero<numeroParaAdivinar&&intentos>0)
            ?"esNumMayor"
            :"esNumMenor";
};

const restarIntentos=()=>{
    intentos--
    intentosR();
    if (intentos===finIntentos){
        sinIntentos()
    }
};

const sinIntentos=()=>{
    intentosR();
    if(boton instanceof HTMLButtonElement)
    apagarBoton();
    muestraMensajeDeComprobacion("","perder");
}

function handleClick(): void {
    const input = document.getElementById("input");
    if (input instanceof HTMLInputElement) {
        const texto = input.value;
        const estado = compruebaNumeroSecreto(texto);
        muestraMensajeDeComprobacion(texto, estado);
    }
}

const boton=document.getElementById("boton");
if (boton instanceof HTMLButtonElement && boton !==null && boton !== undefined){
    boton.addEventListener("click",handleClick);
}