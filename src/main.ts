type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}
interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientesCorregidos: Pacientes[] = [];

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      console.log(pacientes[i]);
    }
  }
  return pacientes;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      console.log(pacientes[i]);
    }
  }
  return pacientes;
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      activarProctolo = true;
    }
  }
  console.log("el protocolo de urgencias se ha activado:");
  return activarProctolo;
};

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let i = 0;
  while (i < pacientes.length) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesCorregidos[pacientesCorregidos.length] = {
        ...pacientes[i],
        especialidad: "Medico de familia",
      };
    } else {
      pacientesCorregidos[pacientesCorregidos.length] = pacientes[i];
    }
    i++;
  }
  console.log(pacientesCorregidos);
  return pacientesCorregidos;
};

const HayPacientesDePediatria = (pacientesCorregidos: Pacientes[]): boolean => {
  let hayPacientesDePediatria = false;
  for (let i = 0; i < pacientesCorregidos.length; i++) {
    if (pacientesCorregidos[i].especialidad === "Pediatra") {
      hayPacientesDePediatria = true;
    }
  }
  console.log("hay pacientes de pediatria");
  return hayPacientesDePediatria;
};

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia = 0;
  let pediatria = 0;
  let cardiologia = 0;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      medicoDeFamilia++;
    } else if (pacientes[i].especialidad === "Pediatra") {
      pediatria++;
    } else if (pacientes[i].especialidad === "Cardiólogo") {
      cardiologia++;
    }
  }
  console.log("pacientes por especialidad");
  console.log(`Medico de familia: ${medicoDeFamilia}`);
  console.log(`Pediatra: ${pediatria}`);
  console.log(`Cardiólogo: ${cardiologia}`);
  return { medicoDeFamilia, pediatria, cardiologia };
};

const eventos = () => {
  obtenPacientesAsignadosAPediatria(pacientes);
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
  console.log(activarProtocoloUrgencia(pacientes));
  reasignaPacientesAMedicoFamilia(pacientes);
  console.log(HayPacientesDePediatria(pacientesCorregidos));
  cuentaPacientesPorEspecialidad(pacientes);
};
eventos();
