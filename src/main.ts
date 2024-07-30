import { createApp } from 'vue'

import './assets/main.pcss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Prod env
if (import.meta.env.PROD) {
  // Code for production only
}
