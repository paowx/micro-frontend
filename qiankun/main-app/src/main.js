import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

let mainApp = createApp(App)
mainApp.use(Router)
mainApp.mount('#app')

import { useQiankun } from './qiankun.js'
useQiankun()

