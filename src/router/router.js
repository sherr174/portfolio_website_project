import { createRouter, createWebHistory } from 'vue-router'
import portfolio from '@/views/portfolio.vue'
import about_me from '@/views/about_me.vue'
import contact_me from '@/views/contact_me.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: portfolio,
    },
    {
      path: '/about_me',
      name: 'about_me',
      component: about_me,
    },
    {
      path: '/contact_me',
      name: 'contact_me',
      component: contact_me,
    }
    ]
})

export default router
