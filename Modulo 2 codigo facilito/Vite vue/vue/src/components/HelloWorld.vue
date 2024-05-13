<template>
  
  <h2 v-text='msg'></h2>
  <h4>numero de telefono {{numero}}</h4>
  <h5>edad {{edad}}</h5>

</template>

<script>
export default {

  // props: ['msg'] para pasar un parametro

  props: {

    msg: String,
    numero: Number,
    edad: String


  }


}
</script>
