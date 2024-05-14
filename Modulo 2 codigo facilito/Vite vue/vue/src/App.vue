<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <HelloWorld :msg="message" :numero="numeroProps" :edad="edadprops" />

  <Boton> ENVIAR </Boton>
  <Boton>ELIMINAR</Boton>


  <h2>AQUI ES LA CLASE 5 MODULO 2</h2>
  <!-- podemos utilizar la etiqueta <keep-alive>aqui dentro componenet</keep-alive> para que persista la informacion entre componenetes -->
  <Fade>
    <component :is="currentComponent"></component>
  </Fade>

  <button @click="currentComponent = 'home'">HOME</button>
  <button @click="currentComponent = 'about'">ABOUT</button>

    <br><br><br>

  <Emits msg="MI VALOR ES EMIIT!" @identificadorEmit="handlerEventoEmit"/>

  <br>
<Span>____________________________________________________________________________________________</Span>
<h3>MODULO 4 CLASE 1 Propiedades Globales</h3>

<h2>{{ $filters.toUppercaseLocal(textoGenerado) }}</h2>

<input type="text" v-model="textoGenerado" />


<h3>DIRECTIVAS PERSONALES ULTIMA CLASE</h3>

<p v-background="'red'">
  {{ message }}
</p>


</template>

<script>
import Boton from './components/Boton.vue'
import HelloWorld from './components/HelloWorld.vue'
import Emits from './components/Emits.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Fade from './transition/Fade.vue'

export default {
  name: 'App',
  
  data() {
    return {
      message: "Mi primer componente con Vue y vite",
      numeroProps: 23213546831,
      edadprops: "21",
      currentComponent: "home",
      textoGenerado: ""


    }
  },

  components: {
    HelloWorld,
    Boton,
    Emits,
    Home,
    About,
    Fade
  },

  methods:{

    handlerEventoEmit(value){
      alert(value)
    }

  }
}
</script>

<style>


</style>
