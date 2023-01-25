
//Representación declarativa {{}}

const app = Vue.createApp({
    //Options API

    // template: `
    // <h1> Hola Mundo </h1>
    // <p> Desde app.js </p>
    // ` 

    // methods: {},
    // watch: {},

    //Composition API
    // setup() {}

    //Estas propiedades las podemos utilizar en el html
    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola Mundo')
            this.author = 'Fernando Herrera'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')