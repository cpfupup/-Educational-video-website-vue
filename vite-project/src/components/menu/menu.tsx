import { defineComponent, ref } from 'vue';
import { Menu, Avatar, Input, AutoComplete } from 'ant-design-vue';
import lylogo from '../../assets/ly.png'
import style from './menu.module.css'


interface Option {
    query: string;
    category: string;
    value: string;
    count: number;
}

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

        //从这里开始是搜索框提示栏目显示内容，后期需要更改
        const value = ref('');
        const dataSource = ref<Option[]>([]);
        const onSelect = (value: any) => {
            console.log('onSelect', value);
        };
        const handleSearch = (val: string) => {
            dataSource.value = val ? searchResult(val) : [];
        };
        const getRandomInt = (max: number, min = 0) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const searchResult = (query: string) =>
            new Array(getRandomInt(5))
                .join('.')
                .split('.')
                .map((_, idx) => {
                    const category = `${query}${idx}`;
                    return {
                        value: category,
                        label: (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <span>
                                    Found {query} on{' '}
                                    <a
                                        href={`https://s.taobao.com/search?q=${query}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {category}
                                    </a>
                                </span>
                                <span>{getRandomInt(200, 100)} results</span>
                            </div>
                        ),
                    };
                });



        //到这里搜索框逻辑结束

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

                    {/* 搜索框展示 */}
                    <AutoComplete
                        class={style.search}
                        dropdownMatchSelectWidth={252}
                        style={{ width: 300 }}
                        Options={dataSource}
                        onSelect={onSelect}
                        onSearch={handleSearch}

                    >
                        <Search size="large" class={style.search} placeholder="input here" enterButton />

                    </AutoComplete>
                    {/* 展示结束 */}
                </div>
            )
        }
    }
})