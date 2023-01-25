
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

//order is not important
//all is not asigned have undefined in js

// const { name, age, codeName, power ='No tiene poder' } = person

// console.log( name )
// console.log( age )
// console.log( codeName )
// console.log( power )

// implicit return
const createHero = ( { name:nombre, age, codeName, power ='No tiene poder' } ) => 
    ({
        id: 1123413413,
        nombre,
        age,
        codeName,
        power,
    })

console.log( createHero( person ) )