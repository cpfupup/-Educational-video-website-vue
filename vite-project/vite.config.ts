import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'

// your plugin installation
Components({
  resolvers: [
    AntDesignVueResolver(),
  ],
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
