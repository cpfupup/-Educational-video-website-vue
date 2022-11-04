import { Carousel, Breadcrumb } from "ant-design-vue";
import { defineComponent, render } from "vue";
import style from './home-setting-component.module.css'
export const HomeSetting = defineComponent({
  setup() {
    return () => {
      return (
        <div class={style.home} >
          <div class={style.informationDisplayColumn}>
            <ClasslBreadcrumbSetting />
            <CarouselSetting />
          </div>
          <VideoShowSetting />
        </div>

      )
    }
  }
})

// 轮播图
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

//这里是课程列表，后期需要按照接口更改信息
export const ClasslBreadcrumbSetting = defineComponent({
  setup() {
    return () => {
      const items = [
        {
          label: '嵌入式',
          key: 'item-1',
          children: [
            { label: 'C语言', key: 'submenu-item-1-1' },
            { label: '操作系统', key: 'submenu-item-1-2' },
            { label: '单片机', key: 'submenu-item-1-3' },
            { label: '计算机组成原理', key: 'submenu-item-1-4' },
            { label: '更多', key: 'submenu-item-1-5' }
          ],
        },
        {
          label: 'Linux开发',
          key: 'item-2',
          children: [
            { label: 'unix/linux编程实践教程', key: 'submenu-item-2-1' },
            { label: 'ARM架构', key: 'submenu-item-2-2' },
            { label: '模拟电路&数字电路', key: 'submenu-item-2-3' },
            { label: '更多', key: 'submenu-item-2-4' }
          ],
        },
        {
          label: '后台开发',
          key: 'item-3',
          children: [
            { label: 'java', key: 'submenu-item-3-1' },
            { label: 'PHP', key: 'submenu-item-3-2' },
            { label: 'Go', key: 'submenu-item-3-3' },
            { label: '更多', key: 'submenu-item-3-4' }
          ],
        },
        {
          label: '前端开发',
          key: 'item-4',
          children: [
            { label: '前端0基础', key: 'submenu-item-4-1' },
            { label: '前端进阶', key: 'submenu-item-4-2' },
            { label: '更多', key: 'submenu-item-4-3' },
          ],
        },
        {
          label: '运维',
          key: 'item-5',
          children: [
            { label: 'Linux运维', key: 'submenu-item-5-1' },
            { label: '自动化运维', key: 'submenu-item-5-2' },
            { label: '更多', key: 'submenu-item-5-3' },
          ],
        },
        {
          label: '计算机通识',
          key: 'item-6',
          children: [
            { label: '计算机网络', key: 'submenu-item-6-1' },
            { label: '操作系统', key: 'submenu-item-6-2' },
            { label: '数据库组成原理', key: 'submenu-item-6-3' },
            { label: '更多', key: 'submenu-item-6-4' }
          ],
        },
        {
          label: '软件测试',
          key: 'item-7',
          children: [
            { label: '自动化测试', key: 'submenu-item-7-1' },
            { label: '功能测试', key: 'submenu-item-7-2' },
            { label: '接口测试', key: 'submenu-item-7-3' },
            { label: '更多', key: 'submenu-item-7-4' }
          ],
        },
      ];


      return (
        <div class={style.breadcrumb} model={items}>
          {
            items.map(item => {
              return (
                <Breadcrumb class={style.breadcrumbItem}>
                  <Breadcrumb.Item class={style.breadcrumbFirstItem}>{item.label}</Breadcrumb.Item>
                  {
                    item.children.map(items => {
                      return (
                        <Breadcrumb.Item >
                          <a href="">{items.label}</a>
                        </Breadcrumb.Item>
                      )
                    })
                  }
                </Breadcrumb>
              )
            })
          }
        </div>

      )
    }
  }
})

// 视频展示
export const VideoShowSetting = defineComponent({
  setup() {
    return () => {
      const items = [
        {
          label: '视频学习',
          key: 'item-1',
          children: [//这里需要mock一下后期需要后端返回
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },
            {
              metaTitle: "Card title",
              metaDescription: "This is the description",
              avatarSrc: "https://joeschmoe.io/api/v1/random",
              settingKey: 'setting',
              editKey: 'edit',
              ellipsisKey: 'ellipsis',
              imgAlt: 'example',
              imgSrc: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            },

          ],
        }
      ];
      return (
        //这里后期应当交给后端返回数据进行渲染
        <div class={style.courseShow} model={items}>
          {
            items.map(item => {
              return (
                <>
                  <h1>{item.label}</h1>
                  {
                    item.children.map(items => {
                      return (
                        <a-card hoverable style="width: 19%" class={style.card}>
                          <img
                            alt={items.imgAlt}
                            src={items.imgSrc}
                          />
                          <setting-outlined key={items.settingKey} />
                          <edit-outlined key="edit" />
                          <ellipsis-outlined key="ellipsis" />
                          <a-card-meta title="Card title" description="This is the description">
                          </a-card-meta>
                        </a-card>
                      )
                    })
                  }
                </>
              )
            })
          }
        </div>
      )
    }
  }
})