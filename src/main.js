import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import axios from "axios"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

axios.defaults.headers = {
  'Content-Type': 'application/json;',
  Accept: 'application/json'
}
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"
axios.defaults.withCredentials = true

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
