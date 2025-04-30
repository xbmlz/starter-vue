import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
