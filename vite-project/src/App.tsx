import { defineComponent } from 'vue'
import { MenuSetting } from './components/menu/menu.tsx'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import { HomeSetting } from './module/home-setting/home-setting-component.tsx';
export default defineComponent({
  setup() {
    return () => (
      <div>
        <MenuSetting />
        {/* 这里后期要把homesetting换成路由插槽 */}
        <HomeSetting/>
      </div>
    )
  }
})