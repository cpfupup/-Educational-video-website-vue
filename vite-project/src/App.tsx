import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { MenuSetting } from './components/menu/menu'
export default defineComponent({
  setup() {
    return () => (
      <div>
        <MenuSetting />
      </div>
    )
  }
})