import { createApp } from 'vue'
import App from './App'
import router from "./router"
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store';
createApp(App).use(store).use(Antd).use(router).mount("#app");

