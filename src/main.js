import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faStarOfLife, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { tailwindcss } from '../src/style.css'


library.add(faUserSecret, faBars, faStarOfLife)


createApp(App, tailwindcss)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
