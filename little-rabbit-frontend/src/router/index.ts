import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/Index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/Index.vue'),
        },
        {
          path: '/category',
          component: () => import('@/views/Category/Index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Index.vue'),
    },
  ],
})

export default router
