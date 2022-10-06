import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import { Menus } from './module/menu/menu.tsx'

export const App = defineComponent({
    setup() {
        return () => {
            return (
                <div>
                    <Button type="primary">hello</Button>
                    <Menus>123</Menus>

                </div>
            )
        }
    },
});
