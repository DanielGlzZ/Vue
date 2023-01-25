
// import { owners } from './data/heroes'

//  const [ dc, marvel ] = owners
 
//  console.log( dc )
//  console.log( marvel )

import superHeroes from '../data/heroes'


// const [ { id, name, owner } ] = superHeroes

// console.log( id, name, owner )

// getHeroById ( id )
//funciones de Flecha
//find }

// const getHeroById = ( id ) => {
//     return superHeroes.find( hero => hero.id === id )
// }

export const getHeroById = ( id ) => superHeroes.find( hero => hero.id === id )


// console.log( getHeroById( 2 ) )

// console.log( getHeroeById(2) ) //SpiderMan

// getHeroesByOwner 'DC', 'Marvel'
// []

export const getHeroesByOwner = ( owner ) => superHeroes.filter( hero => hero.owner === owner )

// console.log( getHeroesByOwner( 'Marvel' ) )

// console.log( getHeroesByOwner('DC') ) //All DC Heroes []


//Esto se puede colocar en otro archivo y hacer un import para obtener los datos de las funciones de arriba


// import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp'

// console.log( getHeroById( 2 ) )

// console.log( getHeroesByOwner( 'Marvel' ) )

