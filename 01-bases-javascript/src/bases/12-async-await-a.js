
const miPromesa = () =>
{
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            // resolve('Tenemos un valor en la promesa')
            reject('REJECT en miPromesas')
        },1000);
    })
}

//El async convierte mi función a un que retorna una promesa

const medirTiempoAsync = async() => {

    try {
        console.log('Inicio')

        //Lo que hace el await es esperar a que tengamos una resolución en la promesa
    
        const respuesta = await miPromesa()    
        console.log( respuesta )
    
        console.log('Fin')
    
        return 'fin de medir tiempo async'
        // throw 'Error en medirTiempoAsync'
    } catch (error) {
        //Este es un valor esperado, por lo cual si quieres el catch debes regresar un throw
        // return 'catch en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }
   
}

medirTiempoAsync()
    .then(valor => console.log( 'THEN Exitoso:', valor ))
    .catch( err => console.log( 'error:', err ))
