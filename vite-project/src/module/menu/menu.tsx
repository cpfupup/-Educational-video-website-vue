import { defineComponent, ref } from "vue"
import { Menu, MenuItem } from 'ant-design-vue';
// import { defineComponent, onUnmounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'

export const Menus = defineComponent({
  setup() {
    const menus = ref([
      {
        name: 'New Issues',
        id: 'New Issues',
        childrenVisible: true,
        children: [
          {
            name: 'IPO Subscription List',
            id: 'IPO Subscription List',
          },
        ],
      },
    ])
    return () => {
      return (
          <Menu mode={menus.value} activeId="IPO Subscription List" />
      )

    }


  })