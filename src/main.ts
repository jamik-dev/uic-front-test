import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueLoaders);
app.use(Notifications)
app.use(router)

app.mount('#app')
