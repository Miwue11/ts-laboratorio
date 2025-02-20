//sitio para buscar emojis
//  https://emojiterra.com/es//


//formatear el console.log para añadir parametros css 
//  https://how.dev/answers/how-to-format-messages-in-consolelog-in-javascript




// // logicas
// var radio=4;
// const pi=Math.PI;
// const area=  pi * radio **2;
// console.log(area);


// // objetos concatenados
// var cliente={
//     nif:"1223456f",
//     nombre:"Miguel",
//     apellidos:{
//         apellido1:"lopez",
//     apellido2:"Rodriguez"},
//     direccion:"URB dominion park"
// };
// console.log(cliente);

// //null
// console.log(null)

// //undifined
// console.log(undefined)


//operadores con ejemplo de mi abogado
// let comision_abogado=0.15;
// let iva=1.21;
// const finiquito=3938.75;
// var dinero_al_abogado=(finiquito*comision_abogado-165.29)*iva;
// var dinero_a_percibir=finiquito-dinero_al_abogado;

// console.log(Math.round(dinero_a_percibir));



//const asigna al objeto completo pero vemos que podemos cambiar sus datos con el punto
// const cliente={
//     nombre:"Miguel",
//     apellidos:"Lopez",
//     direccion:{
//         calle:"calle de la rosa",
//         numero:3,
//         piso:1,
//         letra:"A",
//         codigo_postal:28001,
//         ciudad:"Madrid",
//         pais:"España",
//     },
//     edad:30,
// };

// cliente.nombre="Miguel Angel"; //cambia el nombre
// cliente.edad=31;  //cambia la edad 

// console.log(cliente.nombre); //muestra el nombre
// console.log(cliente);  //muestra el objeto completo



//cambiamos el valor de la fecha de publicacion a const y let y si se puede
//cambiar el libro entero en const es invalido.
// const libro={
//     titulo:"The Catcher in the Rye",
//     autor:"J.D. Salinger",
//     fecha_de_publicacion:1951,
// };
// libro.fecha_de_publicacion=1920;
// console.log(libro)



//cambiamos datos de let y const y vemos que se puede cambiar el valor de la variable
// let nombre="Miguel";
// let apellido="Lopez";

// let ciudad={
//     nombre:"Madrid",
//     pais:"España",
// }
// nombre=ciudad.nombre;
// apellido=ciudad.pais;

// console.log(nombre+" "+apellido); //concatenacion (saldria Madrid España)





/*
Ensalada de alubias con aguacate y huevo

Ingredientes: alubias, aguacate, huevo, cebolla, tomate, lechuga.
Preparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos,
huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada.
Aliñar con aceite de oliva y vinagre.
Ensalada de setas y bacon

Ingredientes: setas, bacon, lechuga, tomate, cebolla, queso.
Preparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con
lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con
aceite de oliva y vinagre.

Ensalada de arándanos y pollo

Ingredientes: arándanos, pollo cocido, lechuga, zanahoria, queso, nueces.
Preparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada,
zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de
miel y mostaza.

Ensalada de maíz y piña

Ingredientes: maíz, piña en cubos, lechuga, pepino, cebolla, aguacate.
Preparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en
rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de
aceite de oliva y vinagre.

Ensalada de mango y queso feta

Ingredientes: mango en cubos, queso feta, lechuga, cebolla, pepino, aceitunas.
Preparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga
troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una
vinagreta de limón y aceite de oliva.
*/



/*
emoticonos:
    🥬 Lechuga
    🍄 Setas
    🫘 Alubias
    🧅 Cebolla
    🌽 Maíz
    🫐 Arándanos
    🫒 Aceitunas
    🍍 Piña
    🥭 Mango
    🥕 Zanahoria
    🍅 Tomate
    🥒 Pepino
    🥑 Aguacate
    🥓 Bacon
    🥚 huevos
    🧀 Queso
*/


// const estiloTitulo="color:red; font-size:18px";
// const estiloIngredientes="color:green; font-size:14px";
// const estiloPreparacion="color:indigo; font-size:12px; font-style:italic";

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


// //TITULO
// console.log("%cEnsalada de alubias con aguacate y huevo", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`%c-Ingredientes: , ${alubias}, ${aguacate}, ${huevos}, ${cebolla}, ${tomate}, ${lechuga}`,estiloIngredientes); //color verde y tamaño de letra 14px

// //PREPARACION

// console.log("%cPreparación: cocer las alubias y dejar enfriar. Mezclar con aguacate en cubos, huevo cocido en rodajas, cebolla en juliana, tomate en cubos y lechuga troceada. Aliñar con aceite de oliva y vinagre.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO
// console.log("%cEnsalada de setas y bacon", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`%c-Ingredientes: ${setas} ${bacon} ${lechuga} ${tomate} ${cebolla} ${queso}`,estiloIngredientes);

// //PREPARACION

// console.log("%cPreparación: saltear las setas y el bacon hasta que estén dorados. Mezclar con lechuga troceada, tomate en cubos, cebolla en juliana y queso rallado. Aliñar con aceite de oliva y vinagre.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO

// console.log("%cEnsalada de arándanos y pollo", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`%c-Ingredientes: ${arandanos}, ${pollo}, ${lechuga}, ${zanahoria}, ${queso}, ${nueces}`,estiloIngredientes);

// //PREPARACION

// console.log("%cPreparación: mezclar los arándanos con el pollo cocido en cubos, lechuga troceada, zanahoria rallada, queso rallado y nueces picadas. Aliñar con una vinagreta de miel y mostaza.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO

// console.log("%cEnsalada de maíz y piña", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`-%cIngredientes: ${maiz}, ${piña}, ${lechuga}, ${pepino}, ${cebolla}, ${aguacate}`,estiloIngredientes); 

// //PREPARACION

// console.log("%cPreparación: mezclar el maíz con la piña en cubos, lechuga troceada, pepino en rodajas, cebolla en juliana y aguacate en cubos. Aliñar con una vinagreta de aceite de oliva y vinagre.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")

// //TITULO    

// console.log("%cEnsalada de mango y queso feta", estiloTitulo);  //color azul y tamaño de letra 18px

// //INGREDIENTES

// console.log(`-%cIngredientes: ${mango} , ${queso}, ${lechuga}, ${cebolla}, ${pepino}, ${aceitunas}`,estiloIngredientes); //color verde y tamaño de letra 14px

// //PREPARACION

// console.log("%cPreparación: mezclar el mango en cubos con el queso feta desmenuzado, lechuga troceada, cebolla en juliana, pepino en rodajas y aceitunas. Aliñar con una vinagreta de limón y aceite de oliva.",estiloPreparacion); //color rojo y tamaño de letra 12px

// console.log("*********************")



//----------------------------------------------//


//FUNCIONES

// function doble(x){
//     return x* 2;
// }
// console.log(doble(2))

// function suma(sumando1,sumando2){
//     return sumando1+sumando2;
// }
// console.log(suma(20,33))

// function resta(minuendo,sustraendo){
//     return minuendo-sustraendo;
// }
// console.log(resta(20,33))


//AREAS GEOMETRICAS EN FUNCIONES

// function area_del_circulo(radio){
//     return 2* Math.PI * radio **2;
// }
// console.log(area_del_circulo(3));



// function area_del_cuadrado(lado){
//     return lado*lado;
// }
// console.log(area_del_cuadrado(3));

// function area_del_rectangulo(base,altura){
//     return base*altura;
// }
// let resultado=area_del_rectangulo(3,4);
// console.log(resultado);


// //----------------------------------------------//


// //FUNCION DE LA RECETA DE ENSALADA

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

// function pintaReceta(titulo, ingredientes, preparacion){
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


// function saludar(){
//     //leer los valores de los imputs
//     const nombre= document.getElementById("nombre").value;
//     const apellido= document.getElementById("apellido").value;
//     //compilar el resultado
//     const resultado= `¡hola ${nombre} ${apellido}!`;
//     //mostrar el resultado
//     document.getElementById("resultado").innerHTML=resultado;
// }
// const boton=document.getElementById("boton");
// boton.addEventListener("click",saludar);




//------------------------------------------------//

// function cambiarFotoPrincipal(idMiniatura){
//     const fotoPrincipal=document.getElementById("foto-principal");
//     const miniatura=document.getElementById(idMiniatura);
//     fotoPrincipal.src=miniatura.src;
// }

// const miniatura1=document.getElementById("miniatura1");
// const miniatura2=document.getElementById("miniatura2");
// const miniatura3=document.getElementById("miniatura3");
// const miniatura4=document.getElementById("miniatura4");
// const miniatura5=document.getElementById("miniatura5");

// miniatura1.addEventListener("click",() => //llamamos a una funcion fantasma con los arrows (flechas)
//     cambiarFotoPrincipal("miniatura1"));//no necesita llaves
// ;

// miniatura2.addEventListener("click",() =>
//     cambiarFotoPrincipal("miniatura2"));

// miniatura3.addEventListener("click",function(){ //aqui llamamos a una funcion anonima (necesita llaves)
//     cambiarFotoPrincipal("miniatura3");
// });

// miniatura4.addEventListener("click",()=> 
//     cambiarFotoPrincipal("miniatura4"));

// miniatura5.addEventListener("click",()=>
//     cambiarFotoPrincipal("miniatura5"));



