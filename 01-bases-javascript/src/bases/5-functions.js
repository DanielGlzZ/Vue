// Forma incorrecta de manejar funciones
// function saludar( xyz ) {
//     return `Hola ${ xyz }`
// }


// Forma correcta de trabajar con funciones
// const saludar = function ( xyz ) {
//     return `Hola ${ xyz }`
// }

// Trabajar con funciones flecha 
// const saludar = ( xyz ) => {
//     return `Hola ${ xyz }`
// }

// Trabajar con funciones flecha reducido
const saludar = ( nombre = 'Peter' ) => `Hola ${ nombre }`

const nombre = 'Tony'

// console.log( saludar(nombre) )

// La manera normal de trabajar con una función flecha y un objeto
// const getUser = () => {
//     return{
//         uid: 'ABCD123',
//         username: 'Tony001'
//     }
// }

// La manera comprimida de manejar una función flecha y un objeto
const getUser = () => ({ 
    uid: 'ABCD123', 
    username: 'Tony001' 
})


const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

// Este some es bastante util
// const existe = heroes.some( ( heroe ) => heroe.id === 3 );

// Si no encuentra ninguno dice undefined pero si lo encuentra regresa el objeto
const { name } = heroes.find( ( heroe ) => heroe.id === 1 );
// Aqui estamos aplicando la desestructuración
console.log( name )