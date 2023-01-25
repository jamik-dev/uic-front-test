import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vue-loaders/dist/vue-loaders.css';
import Notifications from '@kyvg/vue3-notification'
import VueLoaders from 'vue-loaders';
import VueApexCharts from "vue3-apexcharts";

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueApexCharts)
app.use(VueLoaders);
app.use(Notifications)
app.use(router)

app.mount('#app')
