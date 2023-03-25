import { createRouter, createWebHistory } from 'vue-router'
import PowerScreen from '../views/powerScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'powerScreen',
      component: PowerScreen
    },
  ]
})

export default router
