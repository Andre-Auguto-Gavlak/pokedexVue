import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'geracao1',
      component: () => import('../paginas/Geracao1.vue')
    },
    {
      path: '/geracao2',
      name: 'geracao2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../paginas/Geracao2.vue')
    },
    {
      path: '/geracao3',
      name: 'geracao3',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../paginas/Geracao3.vue')
    }
  ]
})

export default router
