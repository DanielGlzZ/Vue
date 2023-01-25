

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad:45,
    direccion: {
        ciudad: 'New York',
        zip: 539393,
        lat: 14.334,
        lng: 34.452
    }
}

const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)
