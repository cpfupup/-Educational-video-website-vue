import { defineComponent } from 'vue'
import { MenuSetting } from './components/header/header-component'
import { HomeSetting } from './module/home-setting/home-setting-component';
import { FooterSetting } from './components/footer/footer-component';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <MenuSetting />
        {/* 这里后期要把homesetting换成路由插槽 */}
        <HomeSetting style={'height:100%'} />
        <FooterSetting />
      </div>
    )
  }
})