import { defineComponent } from 'vue'
import { MenuSetting } from './components/menu/menu.tsx'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <MenuSetting />
      </div>
    )
  }
})