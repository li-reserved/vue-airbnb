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
          meta: {
            apptitle: false
          },
          component: () => import('@/view/Home/index.vue')
        },
        {
          path: '/detail',
          meta: {
            apptitle: true
          },
          component: () => import('@/view/Detail/index.vue')
        },
        {
          path: '/entire',
          meta: {
            apptitle: true
          },
          component: () => import('@/view/Entire/index.vue')
        },
        {
          path: '/demo',
          component: () => import('@/view/Demo/index.vue')
        }
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
