let nombres = ["Hugo", "Paco", "Luis", "Donald"];

let alumnos = [
    { id: 1, name: 'Elsa', role: { id: 1, name: 'Admin', numbers: [1, 2, 3, 4] } },
    { id: 2, name: 'Rodrigo', role: { id: 1, name: 'Profesor', numbers: [1, 2, 3, 4] } },
    { id: 3, name: 'Mariandris', role: { id: 1, name: 'Alumno', numbers: [1, 2, 3, 4] } },
    { id: 4, name: 'Felipe', role: { id: 1, name: 'Alumno', numbers: [1, 2, 3, 4] } }
]

let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador+=1;
}

let indice = 0;
while(indice < nombres.length){
    console.log(nombres[indice]);
    indice++;
}

let indice2 = nombres.length - 1;
while(indice2 >= 0){
    console.log(nombres[indice2]);
    indice2--;
}

let indice3 = 0;
while(indice3 < alumnos.length){
    console.log(alumnos[indice3].name)
    indice3++;
}