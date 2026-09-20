import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/Index.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home/Index.vue'),
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/Index.vue'),
        },
        {
          path: 'category/:id/sub/:subId',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/Index.vue'),
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/Index.vue'),
        },
        {
          path: 'cartList',
          component: () => import('@/views/CartList/Index.vue'),
        },
        {
          path: 'checkout',
          component: () => import('@/views/Checkout/Index.vue'),
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/Index.vue'),
        },
      ],
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Index.vue'),
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
