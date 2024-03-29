
import './assets/main.css'
import { createApp } from 'vue'

import App from './App.vue'
import store from '../store'

import router from './roter'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')