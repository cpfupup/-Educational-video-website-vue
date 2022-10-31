import { Carousel, Breadcrumb, Radio, Button } from "ant-design-vue";
import { defineComponent } from "vue";
import style from './home-setting-component.module.css'
export const HomeSetting = defineComponent({
  setup() {
    return () => {
      return (
        <div class={style.home}>
          <classlBreadcrumbSetting />
          <CarouselSetting />
        </div>


      )
    }
  }
})
export const CarouselSetting = defineComponent({
  setup() {
    return () => {
      return (
        <Carousel autoplay class={style.carousel}>
          <div>
            <h3 variableWidth={true} class={style.contentStyle}>1</h3>
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
export const classlBreadcrumbSetting = defineComponent({//这里是课程列表，后期需要按照接口更改信息
  setup() {
    return () => {
      return (
        <div class={style.breadcrumb}>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>嵌入式</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">C语言</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">操作系统</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">单片机</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">计算机组成原理</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>Linux开发</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">unix/linux编程实践教程</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">ARM架构</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a>模拟电路&数字电路</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>后台开发</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">java</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">PHP</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a>Go</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>前端开发</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">前端0基础</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">前端进阶</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>运维</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">Linux运维</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">自动化运维</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>计算机通识</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">计算机网络</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">操作系统</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">数据库组成原理</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Breadcrumb class={style.breadcrumbItem}>
            <Breadcrumb.Item class={style.breadcrumbFirstItem}>软件测试</Breadcrumb.Item>
            <Breadcrumb.Item >
              <a href="">自动化测试</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">功能测试</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a>接口测试</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">更多</a>
            </Breadcrumb.Item>
          </Breadcrumb>

        </div>

      )
    }
  }
})
