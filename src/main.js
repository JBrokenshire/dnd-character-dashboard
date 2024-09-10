import App from './App.vue'
import '@/assets/styles.css'
import router from './router'
import { createApp } from 'vue'
import 'primeicons/primeicons.css'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: POSITION.BOTTOM_CENTER,
  timeout: 1500
})

app.mount('#app')
