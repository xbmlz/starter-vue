import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import stores from './stores'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(stores)

app.mount('#app')
