
const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']

const [ g, v, t, goten = 'No tiene valor' ] = characters

const returnArray = () => {
    return ['ABC', 123]
}

const [ letters, numbers] = returnArray()

console.log( letters, numbers )

 const returnArray2 = ( [ letters2, numbers2] ) => {
    return [ letters2, numbers2 ]
 }

 const [ letters2, numbers2 ] = returnArray2( ['XYZ', 987 ])

 console.log( letters2, numbers2 )