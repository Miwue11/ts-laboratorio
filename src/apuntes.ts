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