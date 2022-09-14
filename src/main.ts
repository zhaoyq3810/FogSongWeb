import { createApp } from 'vue'
import VueResizeObserver from 'vue-resize-observer'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import i18n from '@/i18n/i18n'
import 'amfe-flexible'
import 'vfonts/RobotoSlab.css'

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueResizeObserver)
  .mount('#app')
