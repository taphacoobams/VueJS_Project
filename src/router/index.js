import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HistoryView from '../views/HistoryView.vue'
import ManualHistoryView from '../views/ManualHistoryView.vue'
import ContactView from '../views/ContactView.vue'
import TestimonialsView from '../views/TestimonialsView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/manualhistory',
    name: 'manualhistory',
    component: ManualHistoryView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
