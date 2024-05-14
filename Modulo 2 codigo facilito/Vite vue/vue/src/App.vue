<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld :msg="message" :numero="numeroProps" :edad="edadprops" />

  <Boton> ENVIAR </Boton>
  <Boton>ELIMINAR</Boton>


  <h2>AQUI ES LA CLASE 5 MODULO 2</h2>
  <!-- podemos utilizar la etiqueta <keep-alive>aqui dentro componenet</keep-alive> para que persista la informacion entre componenetes -->
  <component :is="currentComponent"></component>
  <button @click="currentComponent = 'home'">HOME</button>
  <button @click="currentComponent = 'about'">ABOUT</button>


  <Emits msg="VALOR DEL PROPS" @identificadorEmit="handlerEventoEmit"/>

</template>

<script>
import Boton from './components/Boton.vue'
import HelloWorld from './components/HelloWorld.vue'
import Emits from './components/Emits.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  
  data() {
    return {
      message: "Mi primer componente con Vue y vite",
      numeroProps: 23213546831,
      edadprops: "21",
      currentComponent: "home"


    }
  },

  components: {
    HelloWorld,
    Boton,
    Emits,
    Home,
    About,
  },

  methods:{

    handlerEventoEmit(value){
      console.log("ESTOY DESDE EL APP CON EMTIR", value)
    }

  }
}
</script>
