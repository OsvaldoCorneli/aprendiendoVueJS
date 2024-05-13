<template>
    <!-- de esta forma se haria pasandole por props  -->
    <!-- <button>{{msg}}</button>  -->
    <!-- Aqui lo hacemos con slot  -->
    <button>
        <slot></slot>
    </button>

</template>

<script>
export default {


    props:["msg"]
    
}
</script>