import { Button } from "ant-design-vue";
import { defineComponent, onBeforeMount, ref } from "vue";
import style from './footer.module.css'
export const FooterSetting = defineComponent({
  setup() {
    return () => {

      return (
        <div class={style.backGround}>
          {/* 中间实体盒子 */}
          <div class={style.header}>
            
          </div>
        </div>
      )
    }
  }
})