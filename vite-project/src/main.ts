import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import App from './App'
import router from "./router"

createApp(App).use(router).mount("#app");

