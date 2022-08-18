import { createApp } from 'vue'
import App from './App.vue'
import ClickOutsideDirective from '@/directives/ClickOutsideDirective'

const devart = createApp(App)

devart.use(ClickOutsideDirective)
devart.mount('#app')
