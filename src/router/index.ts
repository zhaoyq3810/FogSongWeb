import { createRouter, createWebHashHistory } from 'vue-router'
import { IRouter, IScrollBehavior } from '@/interface'
import constantRoutes from '@/router/constantRoutes'
import errRoutes from '@/router/errRoutes'

const routes:IRouter = [...constantRoutes, ...errRoutes]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: ((to, from, savedPosition) => (savedPosition || { x: 0, y: 0 })) as IScrollBehavior,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
