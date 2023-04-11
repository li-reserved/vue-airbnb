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
            isFixed: true,
            apptitle: false,
            topAlpha: true
          },
          component: () => import('@/view/Home/index.vue')
        },
        {
          path: '/detail',
          meta: {
            isFixed: false,
            apptitle: false,
            topAlpha: false
          },
          component: () => import('@/view/Detail/index.vue')
        },
        {
          path: '/entire',
          meta: {
            isFixed: false,
            apptitle: true,
            topAlpha: false
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
