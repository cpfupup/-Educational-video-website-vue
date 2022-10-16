import { defineComponent, ref } from 'vue';
import { Menu } from 'ant-design-vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export const MenuSetting = defineComponent({
    setup() {
        const current = ref(['mail']);
        return () => {
            return (
                <div>12333333</div>
            )
        }
    }
})