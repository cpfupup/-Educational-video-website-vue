//conmonents里面的组件一般用来存放公共组件
import { defineComponent, ref } from 'vue';
import { Menu, Avatar, Input, AutoComplete } from 'ant-design-vue';
import { LoginSetting } from '../login/login-component';
import { getMenuSettingController } from './header-controller'
import lylogo from '../../assets/ly.png'
import style from './header.module.css'

export const MenuSetting = defineComponent({

    setup() {
        const { Search } = Input;
        const items = [
            {
                label: '首页', key: 'item-1',
                style: ['width:112px', 'text-align:center'],
                children: [],
            }, // 菜单项务必填写 key
            {
                label: '我的学习',
                key: 'item-2',
                style: ['width:112px', 'text-align:center'],
                children: [
                    { label: '文章阅读', key: 'submenu-item-2-1' },
                    { label: '视频学习', key: 'submenu-item-2-2' },
                    { label: '我的收藏', key: 'submenu-item-2-3' },
                    { label: '我要投稿', key: 'submenu-item-2-5' }
                ],
            },
            {
                label: '下载App',
                key: 'item-3',
                style: ['width:112px', 'text-align:center'],
                children: [],
            },
            {
                label: '直播',
                key: 'item-4',
                style: ['width:112px', 'text-align:center'],
                children: []
            },
            {
                label: '消息',
                key: 'item-5',
                style: ['width:112px', 'text-align:center'],
                children: [],
            },
        ];

        return () => {
            const menuSettingController = getMenuSettingController()
            return (
                //最外层头部
                <div class={style.backGround}>
                    {/* 中间实体盒子 */}
                    <div class={style.header}>
                        <img src={lylogo} alt="" class={style.lylogo} />
                        <Menu
                            class={style.menu}
                            items={items}
                            mode="horizontal"
                        />

                        {/* 这里是登陆页面，后续需要添加登陆判断 */}
                        <LoginSetting class={style.logIn}></LoginSetting>

                        {/* 头像 */}
                        <Avatar
                            class={style.avatar}
                            size={46}
                            gap={40}
                        />

                        {/* 从这里开始是搜索框展示 */}
                        <AutoComplete
                            // dropdownMatchSelectWidth={252}
                            class={style.search}
                            options={menuSettingController.dataSource}
                            onSelect={(item) => menuSettingController.onSelect(item)}
                            onSearch={(item) => menuSettingController.handleSearch(item)}
                        >
                            <Search
                                class={style.search}
                                size="large"
                                placeholder="请输入搜索内容"
                                enterButton
                            />
                            <div style="display: flex; justify-content: space-between">
                                <span>
                                    Found {menuSettingController.query} on
                                    <a
                                        href="`https://s.taobao.com/search?q=${item.query}`"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {menuSettingController.category}
                                    </a>
                                </span>
                                <span>{menuSettingController.count} results</span>
                            </div>
                        </AutoComplete >
                        {/* 展示结束 */}
                    </div >
                </div>

            )
        }
    }
})