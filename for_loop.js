let nombres = ["Hugo", "Paco", "Luis", "Donald"];

let alumnos = [
    { id: 1, name: 'Elsa'},
    { id: 2, name: 'Rodrigo'},
    { id: 3, name: 'Mariandris'}
]

/* for(let contador = 1; contador <= 10; contador++){
    console.log(contador);
} */

/* for(let indice = 0; indice < nombres.length; indice++){
    console.log(nombres[indice]);
} */
console.time() // contador de ms para determinar el tiempo de ejecucion
for(let indice = 0; indice < nombres.length; indice++){
    if(indice % 2 === 1){
        console.log(indice, nombres[indice]);
    }
}
console.timeEnd()

console.time()
for(let indice = 1; indice < nombres.length; indice+=2){
    console.log(nombres[indice])
}
console.timeEnd()

for(let indice = nombres.length - 1; indice >= 0; indice-=2){
    console.log(nombres[indice])
}

for(let indice = 0; indice < alumnos.length; indice++){
    let alumno = alumnos[indice];
    console.log(alumno.name);
    console.log(alumno["name"]);
}

for(let indice = 0; indice < alumnos.length; indice++){
    console.log(alumnos[indice].name);
}