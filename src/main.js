import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";


const app = createApp(App)

app.config.globalProperties.articles_ms_port = 18080
app.config.globalProperties.orders_ms_port = 18081
app.config.globalProperties.payment_ms_port = 15000

app.use(router).mount('#app')

