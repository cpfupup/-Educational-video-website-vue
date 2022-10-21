import { defineComponent, ref } from 'vue';
import { Menu, Avatar,Switch,MenuTheme } from 'ant-design-vue';
export const MenuSetting = defineComponent({
    setup() {
        const items = [
            { label: '首页', key: 'item-1' }, // 菜单项务必填写 key
            {
                label: '我的学习',
                key: 'item-2',
                children: [
                    { label: '文章阅读', key: 'submenu-item-2-1' },
                    { label: '视频学习', key: 'submenu-item-2-2' },
                    { label: '我的收藏', key: 'submenu-item-2-3' },
                    { label: '学习记录', key: 'submenu-item-2-4' },
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
        const [theme, setTheme] = Ref<MenuTheme>('dark');
        const changeTheme = (value: boolean) => {
            setTheme(value ? 'dark' : 'light');
          };
        return () => {

            return (
                <div>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <Menu items={items} mode="horizontal" theme={theme}
                        onClick={onClick}
                    />
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<AntDesignOutlined />}
                    />
                </div>
            )
        }
    }
})