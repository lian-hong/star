import axios from 'axios'

// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

//请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//axios设置响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response //拦截处理响应结果，直接返回需要的数据
  },
  (error) => {
    return Promise.reject(error)
  }
)
