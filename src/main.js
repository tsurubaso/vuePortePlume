import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import Contact from './views/Contact.vue'
import PageDAccueil from './views/PageDAccueil.vue'
import PresentationAuteur from './views/PresentationAuteur.vue'
import Text from './views/Text.vue'
import Navbar from './components/navBar.vue'

// Icons
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as VueRouter from 'vue-router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'PageDAccueil',
        component: PageDAccueil
        },
        {
            path: '/presentationAuteur',
        name: 'PresentationAuteur',
        component: PresentationAuteur
        },
        {
            path: '/contact',
        name: 'Contact',
        component: Contact
        },
        {
            path: '/text',
        name: 'Text',
        component: Text
        },
        
      ]
    })

const app = createApp(App)
app.use(router)

app.component("v-icon", OhVueIcon);
app.component('nav-bar', Navbar)

app.mount("#app");


/*
Je vais ajouter des notes ici
https://vitejs.dev/guide/dep-pre-bundling.html
CommonJS and ESM in a Vite
https://github.com/vite-plugin/vite-plugin-commonjs 
found here
https://github.com/vitejs/vite/discussions/8726
 dependency pre-bundling.
https://stackoverflow.com/questions/74845363/vue3-with-vite-cant-import-commonjs-module
I need to remember this site!!!
https://tableconvert.com/excel-to-json
https://primevue.org/
*/