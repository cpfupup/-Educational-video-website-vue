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
        setup() {
            return () => (
                <div>
                    <MenuSetting />
                </div>

            )
        },
    })