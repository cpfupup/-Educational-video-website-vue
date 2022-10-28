import { Carousel } from "ant-design-vue";
import { defineComponent } from "vue";
import style from './home-setting-component.module.css'
export const HomeSetting = defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <CarouselSetting/>
        </div>


      )
    }
  }
})
export const CarouselSetting = defineComponent({
  setup() {
    return () => {
      return (
        <Carousel autoplay>
          <div>
            <h3 class={style.contentStyle}>1</h3>
          </div>
          <div>
            <h3 class={style.contentStyle}>2</h3>
          </div>
          <div>
            <h3 class={style.contentStyle}>3</h3>
          </div>
          <div>
            <h3 class={style.contentStyle}>4</h3>
          </div>
        </Carousel>

      )
    }
  }
})
