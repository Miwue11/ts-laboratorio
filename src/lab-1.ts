interface GrupoMusical {
    nombreGrupo: string;
    cantantes: string[];
    compositor: string;
    año: number;
    activo: boolean;
    genero: string;
}

const rock = "🎸 Rock";
const pop = "🎵 Pop Rock";
const hardRock = "🤘 Hard Rock";
const clasica = "🎼 Clasica";
const color = "background-color:green;font-weight:bold;font-size:20px";

function crearGrupoMusical(nombreGrupo: string, cantantes: string[], compositor: string, año: number, activo: boolean, genero: string): GrupoMusical {
    return { nombreGrupo, cantantes, compositor, año, activo, genero };
}

const gruposMusicales: GrupoMusical[] = [
    crearGrupoMusical("The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], "John Lennon", 1960, true, `- ${pop}`),
    crearGrupoMusical("Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"], "Freddie Mercury", 1970, false, `- ${rock}`),
    crearGrupoMusical("AC/DC", ["Bon Scott", "Brian Johnson"], "Angus Young", 1973, true, `- ${hardRock}`),
    crearGrupoMusical("Ludwig Van Beethoven", ["Ludwig Van Beethoven"], "Ludwig Van Beethoven", 1770, false, `- ${clasica}`),
    crearGrupoMusical("The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"], "Mick Jagger", 1962, true, `- ${rock}`)
];

gruposMusicales.forEach(grupo => console.log(`%c${grupo.nombreGrupo}`, color, grupo));