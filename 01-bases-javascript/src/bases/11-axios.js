import axios from 'axios'


const apiKey = 'PoEhCnKf4KVtGuCN5WoNfoYahn91nrhh'

// `https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`


//Crear una instancia de axios para resumir el codigo de las API

const giphyApi = axios.create({
   baseURL: 'https://api.giphy.com/v1/gifs',
   params: {
        api_key: apiKey
   } 
})

export default giphyApi

// giphyApi.get('/random')
//     .then( resp => {

//         const { data } = resp.data
//         const { url } = data.images.original
//         // const { url } = resp.data.data.images.original

//         const img = document.createElement('img')
//         img.src = url

//         document.body.append( img )
    
//     })