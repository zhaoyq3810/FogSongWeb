import { IRouter } from '@/interface'

/**
 * meta
 * @title {string} 顶端标题
 * @tabBar {boolean = false} 是否显示 TabBar
 * @cache {boolean = false} 当前路由组件是否缓存
 */
const cache = true
const tabbar = true
export default [
  // 首页
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home', cache },
    component: () => import('@/views/Home/Home.vue'),
  },
] as IRouter
