
interface GrupoMusical{
    nombreGrupo: string;
    cantantes: string[];
    compositor: string;
    año: number;
    activo: boolean;
    genero: string;

}

const rock= "🎸 Rock";
const pop= "🎵 Pop Rock";
const hardRock= "🤘 Hard Rock";
const clasica= "🎼 Clasica";

const color="background-color:green;font-weight:bold;font-size:20px";


let grupo1: GrupoMusical = {
    nombreGrupo: "The Beatles",
    cantantes: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    compositor: "John Lennon",
    año: 1960,
    activo: true,
    genero: `- ${pop}`

}

let grupo2: GrupoMusical = {
    nombreGrupo: 'Queen',
    cantantes: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
    compositor: 'Freddie Mercury',
    año: 1970,
    activo: false,
    genero: `- ${rock}`


}

let grupo3: GrupoMusical = {
    nombreGrupo: 'AC DC',
    cantantes: ['Bon Scott', 'Brian Johnson'],
    compositor: 'Angus Young',
    año: 1973,
    activo: true,
    genero: `- ${hardRock}`

}

let grupo4: GrupoMusical = {
    nombreGrupo: 'Ludwing Van Beethoven',
    cantantes: ['Ludwing Van Beethoven'],
    compositor: 'Ludwing Van Beethoven',
    año: 1770,
    activo: false,
    genero: `- ${clasica}`

}

let grupo5: GrupoMusical = {
    nombreGrupo: '%cThe Rolling Stones',
    cantantes: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
    compositor: 'Mick Jagger',
    año: 1962,
    activo: true,
    genero: `- ${rock}`
}
console.log(`%cThe Beatles`,color);
console.log(grupo1,);
console.log(`%cQueen`,color);
console.log(grupo2);
console.log(`%cAC DC`,color);
console.log(grupo3);
console.log(`%cLudwing Van Beethoven`,color);
console.log(grupo4);
console.log(`%cThe Rolling Stones`,color);
console.log(grupo5);