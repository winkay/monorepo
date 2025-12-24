import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import { setRouter } from '@repo/router'
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
// 注入 router
setRouter(router)

app.mount('#app')

export { pinia }
