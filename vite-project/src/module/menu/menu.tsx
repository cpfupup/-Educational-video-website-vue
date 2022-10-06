import { defineComponent, reactive } from "vue"
import { Menu,MenuItem } from 'ant-design-vue';
// import { defineComponent, onUnmounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'

export const Menus = defineComponent({
    setup() {
        return () => {
            return (
                <Menu>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                    <MenuItem>6</MenuItem>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                    <MenuItem>6</MenuItem>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5</MenuItem>
                    <MenuItem>6</MenuItem>

                </Menu>
            )

        }

    }
})