<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld :msg="message" :numero="numeroProps" :edad="edadprops" />

  <Boton> ENVIAR </Boton>
  <Boton>ELIMINAR</Boton>

</template>

<script>
import Boton from './components/Boton.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  
  data() {
    return {
      message: "Mi primer componente con Vue y vite",
      numeroProps: 23213546831,
      edadprops: "21"


    }
  },

  components: {
    HelloWorld,
    Boton
  }
}
</script>
