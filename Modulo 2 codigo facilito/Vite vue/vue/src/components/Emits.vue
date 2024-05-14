<template>
    
    <button @click="evento">Emit</button>

</template>

<script>
export default {
    
    props:["msg"],


    methods:{
        evento(){
            this.$emit("identificadorEmit", this.msg) //dos parametros 1ro un identificador, 2do los parametros que vamos a enviarle
        }
    }

}
</script>