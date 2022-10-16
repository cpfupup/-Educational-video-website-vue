import { defineComponent } from 'vue'
import {Button} from 'ant-design-vue'
export default defineComponent({
    setup() {
        return () => <Button type="dashed">1234</Button> //写一个 hello world祭天
    }
})