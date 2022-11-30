let nombres = ["Hugo", "Paco", "Luis", "Donald"];

let alumnos = [
    { id: 1, name: 'Elsa', role: { id: 1, name: 'Admin', numbers: [1, 2, 3, 4] } },
    { id: 2, name: 'Rodrigo', role: { id: 1, name: 'Profesor', numbers: [1, 2, 3, 4] } },
    { id: 3, name: 'Mariandris', role: { id: 1, name: 'Alumno', numbers: [1, 2, 3, 4] } },
    { id: 4, name: 'Felipe', role: { id: 1, name: 'Alumno', numbers: [1, 2, 3, 4] } }
]


for (let nombre of nombres) {
    console.log(nombre)
}

for (let alumno of alumnos) {
    console.log(alumno)
}

for (let alumno of alumnos) {
    console.log(alumno.name)
    console.log(alumno.role.name)
    alumno.role.numbers[2] = Math.floor(Math.random()*100)+1;
    console.log(alumno);
}

console.log(alumnos);