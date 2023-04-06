import { createRouter, createWebHistory } from 'vue-router'

import Contact from '../views/Contact.vue'
import PageDAccueil from '../views/PageDAccueil.vue';
import PresentationAuteur from '../views/PresentationAuteur.vue'
import Text from '../views/text.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
          path: '/Contact',
      name: 'Contact',
      component: Contact
      },
      {
          path: '/text/:id',
      name: 'Text',
      component: Text
      }
  ]
})

export default router
