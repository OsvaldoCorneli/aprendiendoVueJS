<template>

    <transition name="fade">


        <slot>
        </slot>


    </transition>
    
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
button{

background-color: red;

}

.fade-enter-active, .fade-leave-active {
transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
opacity: 0;
}



</style>