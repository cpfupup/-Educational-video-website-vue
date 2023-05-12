import { getSliders, getClass } from "@/service/home-service";
import { onBeforeMount, ref } from "vue";

//轮播图的数据处理
let imgurl = ref<string[]>([])
let classurl = ref<string[]>([])
export const getHomeMessage = () => {
  onBeforeMount(() => {
    getSliders().then(res => {
      imgurl.value = res.data.list
    })
    getClass({
      pageNum:1,
      pageSize:16,
    }).then(res => {
      classurl.value = res.data.pageInfo.list
    })
  })
  return { imgurl, classurl }
}