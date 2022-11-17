import { getSliders, getClass } from "@/service/home-service";
import { onBeforeMount, ref } from "vue";

//轮播图的数据处理
let imgurl = ref([])
let classurl = ref([])
export const getHomeMessage = () => {
  onBeforeMount(() => {
    getSliders().then(res => {
      imgurl.value = res.data.list
    })
    getClass({
      pageNum:1,
      pageSize:15,
    }).then(res => {
      classurl.value = res.data.pageInfo.list
    })
  })
  return { imgurl, classurl }
}