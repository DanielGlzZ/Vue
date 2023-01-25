<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIroman"> Cambiar Ironman </button>
    <button @click="changeHulk"> Cambiar Hulk </button>
  
    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>

    <button @click="changeStatus" >Cambiar status</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'HomeView',

  setup() {
    //Con ref tenemos que utilizar .value para sacar los datos del envoltorio
    const ironman = ref({ name: 'Tony', age: 50 })
    //En el caso de reactive no es necesario usar value porque solo funciona con objetos
    const hulk = reactive({ name: 'Bruce', age: 50 })
  
    const ironmanIsAlive = reactive(false)

    const hulkIsAlive = ref(true)

    const changeStatus = () => {
        hulkIsAlive.value = !hulkIsAlive.value
        ironmanIsAlive = !ironmanIsAlive
    }

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,

      changeIroman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 45
      },
    }

  }

}
</script>
