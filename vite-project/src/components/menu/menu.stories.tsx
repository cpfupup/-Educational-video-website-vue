import { defineComponent } from "vue"
import { MenuSetting } from "./menu"


export default {
    title: 'menu setting',
    parameters: {
        layout: 'fullscreen',
    },
}
export const Normal = () =>

    defineComponent({
        // component: MenuSetting,

        // const MenuSetting 
        setup() {
            return () => (
                <div>
                    <MenuSetting />
                </div>

            )
        },
    })