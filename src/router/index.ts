import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/view/Layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/view/Home/index.vue')
        },
        {
          path: '/detail',
          component: () => import('@/view/Detail/index.vue')
        },
        {
          path: '/entire',
          component: () => import('@/view/Entire/index.vue')
        }
      ]
    }
  ]
})

export default router
