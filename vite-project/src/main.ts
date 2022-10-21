import { createApp } from 'vue'
import App from './App'
import router from "./router"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { createPinia } from 'pinia'
createApp(App).use(createPinia()).use(Antd).use(router).mount("#app");

