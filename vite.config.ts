import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    alias(),
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        // 插件预设支持导入的api
        'vue',
        'vue-router',
        // 自定义导入的api
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
      dts: './auto-imports.d.ts',
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/style/variables.less";',
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        require('autoprefixer')({
          overrideBrowserslist: [
            'last 10 versions', // 所有主流浏览器最近10版本用
          ],
        }),
        require('postcss-pxtorem')({
          rootValue: 37.5,
          propList: ['*'],
          unitPrecision: 5,
        }),
      ],
    },
  },
})
