let nombres = ["Hugo", "Paco", "Luis", "Donald"];

let alumnos = [
    { id: 1, name: 'Elsa', role: { id: 1, name: 'Admin', numbers: [1, 2, 3, 4] } },
    { id: 2, name: 'Rodrigo', role: { id: 1, name: 'Profesor', numbers: [1, 2, 3, 4] } },
    { id: 3, name: 'Mariandris', role: { id: 1, name: 'Alumno', numbers: [1, 2, 3, 4] } },
    { id: 4, name: 'Felipe', role: { id: 1, name: 'Alumno', numbers: [1, 2, 3, 4] } }
]

let i = 1;
do {
    console.log(i);
    i++;
} while(i <= 10)


let j = 0;
do {
    console.log(nombres[j]);
    j++;
} while(j < nombres.length);