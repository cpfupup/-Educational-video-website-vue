import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  VantResolver,
} from 'unplugin-vue-components/resolvers'

// your plugin installation
Components({
  resolvers: [
    AntDesignVueResolver(),
    ElementPlusResolver(),
    VantResolver(),
  ],
})
export default defineConfig({
  resolve: {
    alias: {
      // 别名
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 全局less变量
          hack: `true; @import (reference) "${path.resolve(
            'src/style/global.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 8080,
    proxy: {
      '/api': ''
    },
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),


  ],
})
