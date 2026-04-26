import type { App, Plugin } from 'vue'
import { createPinia } from 'pinia'
import MyCite from './MyCite.vue'
import References from './References.vue'
const referencesPlugin: Plugin = {
  install(app: App) {
    const pinia = createPinia()
    app.use(pinia)

    app.component('MyCite', MyCite)
    app.component('References', References)
  },
}

export default referencesPlugin
