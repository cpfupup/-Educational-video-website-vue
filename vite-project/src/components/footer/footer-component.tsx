import { Descriptions } from "ant-design-vue";
import { defineComponent, onBeforeMount, ref } from "vue";
import style from './footer.module.css'
export const FooterSetting = defineComponent({
  setup() {
    return () => {

      return (
        <div class={style.backGround}>
          {/* 中间实体盒子 */}
          <Descriptions  class={style.footer} >
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone" class={style.itemFont}>1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
            <Descriptions.Item label="Address">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </div>
      )
    }
  }
})