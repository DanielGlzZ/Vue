<template>    
    <div> 
        <h1>
            About Page
        </h1>
        <hr>
        <h2> {{ name }}
        </h2>
        <button
        @click="onChangeName">
         Cambiar nombre
        </button>
    </div>
</template>

<script>
export default {

    data() {
        return {
            name: 'Fernando'
        }
    },
    methods: {
        onChangeName() {
            this.name = 'Melissa'
        }
    },
    //Es cuando la data aún no se ha creado
    beforeCreate() {
        console.log('beforeCreate')
    },
    //Es cuando la data ya se ha creado
    created() {
        this.name = 'Juan Carlos'
        console.log('created')
        //Peticiones HTTP
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    },
}
</script>