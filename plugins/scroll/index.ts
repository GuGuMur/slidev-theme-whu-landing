import type { App, Plugin } from 'vue'
import { createPinia } from "pinia";
import Scroll from './Scroll.vue'

const scrollPlugin: Plugin = {
  install(app: App) {
    const pinia = createPinia()
    app.use(pinia)
    app.component('Scroll', Scroll)
  },
}

export default scrollPlugin
