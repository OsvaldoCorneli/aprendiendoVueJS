import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// DE ESTA FORMA SE GENERA LA APLICACION
// createApp(App).mount('#app')

// AQUI VAMOS A CREAR UNA CONFIGURACION PARA LAS PROPIEDADES GLOBALES
// DECLARAMOS UNA VARIABLE DE CREATEAPP 

const app = createApp(App)



// AHORA CREAMOS LAS PROPIEADES GLOBALES

app.config.globalProperties.$filters = {
    
    toUppercaseLocal(value){
        return value.toUpperCase()
    }
    
}

app.directive('background', {

    beforeMount(el, binding, vnode, prevVnode){
        console.log(binding)
        el.style.background = binding.value
    },


})

//tengo que definir esto al final
app.mount("#app")  //HASTA AQUI TODO FUNCIONA IGUAL