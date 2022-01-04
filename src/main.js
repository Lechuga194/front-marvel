import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

//Iconos
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//LOCAL
//axios.defaults.baseURL = "http://127.0.0.1:3001";

axios.defaults.baseURL = "https://antware-marvel.herokuapp.com";

library.add(fas) //Iconos

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router, axios).mount('#app')
