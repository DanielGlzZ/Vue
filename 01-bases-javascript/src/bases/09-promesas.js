import { getHeroById } from './bases/08-imp-exp'

// console.log("Inicio")

//Las promesas se usan cuando se trabajan con peticiones asincronas
//Para alguna carga de imagenes
// new Promise( (resolve, reject) =>{
//     console.log('cuerpo de la promesa')
//     resolve('Promesa resuelta')
// })
// .then( console.log )
// .catch( console.log )

// .then( msg => console.log( msg ) )
// .catch( err => console.log( err))

// console.log('Fin')



const getHeroByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject )=>{

        setTimeout(() => {

            const hero = getHeroById( id )

            if( hero ) {
                resolve( hero )
            } else {
                reject('Hero no existe')
            }
            
        }, 1000);

    } );
}

getHeroByIdAsync(2)
    .then( h => console.log(`El héroe es: ${ h.name }`) )
    .catch( console.log )