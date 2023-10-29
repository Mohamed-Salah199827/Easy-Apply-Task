import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios";



const app = createApp(App)
const API_URL = import.meta.env.VITE_API_URL;



axios.defaults.baseURL = API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


app.use(createPinia())
app.use(router)

app.mount('#app')
