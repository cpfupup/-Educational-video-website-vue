import { defineComponent, ref } from 'vue';
import { Menu, Avatar, Space, Input } from 'ant-design-vue';
import lylogo from '../../assets/ly.png'
import style from './menu.module.css'
export const MenuSetting = defineComponent({
    setup() {
        const { Search } = Input;
        const items = [//这里为什么不能用ref？
            { label: '首页', key: 'item-1' }, // 菜单项务必填写 key
            {
                label: '我的学习',
                key: 'item-2',
                children: [
                    { label: '文章阅读', key: 'submenu-item-2-1' },
                    { label: '视频学习', key: 'submenu-item-2-2' },
                    { label: '我的收藏', key: 'submenu-item-2-3' },
                    { label: '我要投稿', key: 'submenu-item-2-5' }
                ],
            },
            {
                label: '下载App',
                key: 'submenu',

            },
            { label: '直播', key: 'item-3' },
            { label: '消息', key: 'item-4' },


        ];
        // const [theme, setTheme] = ref<MenuTheme>('dark');
        return () => {

            return (
                <div class={style.header}>
                    <img src={lylogo} alt="" class={style.lylogo} />
                    <Menu class={style.menu} items={items}
                        mode="horizontal"
                    />
                    <div class={style.logIn}>登陆/注册</div>
                    <Avatar
                        class={style.avatar}
                        size={46}
                        gap={40}
                    />
                    <Space direction="vertical" class={style.search}>
                        <Search placeholder="input search text" enterButton />
                    </Space>
                </div>
            )
        }
    }
})