let nombres = ["Hugo", "Paco", "Luis", "Donald"];

let alumnos = [
    { id: 1, name: 'Elsa'},
    { id: 2, name: 'Rodrigo'},
    { id: 3, name: 'Mariandris'}
]

for(let indice in nombres){
    console.log(indice, nombres[indice])
}

for(let indice in alumnos){
    let alumno = alumnos[indice];
    console.log(alumno.name)
}

for(let indice in alumnos){
    console.log({ [alumnos[indice].id]: alumnos[indice].name})
}