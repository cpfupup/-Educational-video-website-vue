//请求主页所有的内容，后期需要更改为自己的服务器接口
import request from "./axios-service";

//请求轮播图的接口
export function getSliders() {
  return request({
    url: '/api/slider/getSliders',
  })
}

//请求主页课程接口
export function getClass(data: object) {
  return request({
    url: '/api/course/mostNew',
    method: 'post',
    data
  })
}