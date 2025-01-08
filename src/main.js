import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

axios.defaults.headers["Accept-Language"]
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
axios.defaults.withCredentials = true

const app = createApp(App)

app.use(router)

app.mount('#app')
