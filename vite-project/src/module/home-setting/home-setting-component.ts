import { getSliders } from "@/service/home-service";
import { onBeforeMount, ref } from "vue";

//轮播图的数据处理
let imgurl = ref([])
export const getHomeMessage = () => {
  onBeforeMount(() => {
    getSliders().then(res => {
      imgurl.value = res.data.list
    })
  })
  return imgurl
}