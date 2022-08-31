declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * @param {string} packageName
 * declare module 'packageName'
 * 自定义无 @types 外部包引用
 */
declare module 'unplugin-auto-import'

/**
 * @param {string} VITE_APP_{ENV_NAME}
 * readonly VITE_APP_NEW_PATH: string
 * 配置环境变量类型
 */
interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_BASE_API: string
  // 更多环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
