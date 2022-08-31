import { IRouter } from '@/interface'

export default [
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import('@/views/Exception/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    hidden: true,
  },
] as IRouter
