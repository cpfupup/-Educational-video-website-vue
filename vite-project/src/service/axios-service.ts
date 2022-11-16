import axios from 'axios';
//创建axios对象
const service = axios.create();

//请求拦截器
service.interceptors.request.use(config => {
  return config;
}, error => {
  Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
});
export default service