import { createRouter, createWebHistory } from 'vue-router'
import portfolio from '@/views/portfolio/portfolio.vue'
import about_me from '@/views/about_me.vue'
import contact_me from '@/views/contact_me.vue'
import item_details from '@/views/portfolio/item_details.vue'
import thank_you from '@/views/thank_you.vue'

const routes = [
  {
    path: '/portfolio',
    children: [
      {
        path: '',
        name: 'portfolio',
        component: portfolio,
      },
      {
        path: ':portfolio_id',
        name: 'item_details',
        component: item_details,
      },
    ],
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
  },
  {
    path: '/thank_you',
    name: 'thank_you',
    component: thank_you,
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
