import { getSliders } from "@/service/home-service";
import { defineComponent, onBeforeMount, ref } from "vue";
//请求轮播图处理 后期需要迁走
import { defineStore } from 'pinia'

let imgurl = ref([])
//     
// interface ISLogin {
//   imgurl: string[],
// }
// const getHomeMessage: () => ISLogin = () => {
//   return {
//     imgurl: []
//   }
// }
// onBeforeMount(() => {
//   getSliders().then(res => {
//     getHomeMessage.imgurl = res.data.list
//   })
// })
// export const useLoginController = defineStore('operate-controller', {
//   state: getHomeMessage,
//   getters: {
//   },
//   actions: {
//   }
// })
export const getHomeMessage = () => {
  onBeforeMount(() => {
    getSliders().then(res => {
      imgurl.value = res.data.list
    })
  })
  return imgurl
}