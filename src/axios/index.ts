import Axios from 'axios'
import { storeState, storeCommit } from '@/store/Tools'
import router from '@/router'
import { IObj, IAxiosReqFunc } from '@/interface'

// 请求基础地址
const baseURL = import.meta.env.VITE_APP_BASE_API

const axios: IAxiosReqFunc = Axios.create({
  baseURL,
  timeout: 15000,
}) as any

// 前置拦截器
axios.interceptors.request.use(
  (response: IObj) => {
    response.headers.Accept = '*/*'
    if (response.headers['Content-Type'] !== 'multipart/form-data') {
      response.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    if (storeState.token) {
      response.headers.Authorization = storeState.token
    }
    return response
  }, (error: IObj) => Promise.reject(error),
)

// 后置拦截器
axios.interceptors.response.use(
  (response: IObj) => {
    if (response.status === 200) {
      const data = response.data
      if (
        data.code
        && data.code !== 200
      ) {
        alert(data.msg)
        return Promise.reject(response)
      }
      return data
    }
    return Promise.reject(response)
  },
  (error: IObj) => {
    if (error.response && error.response.status) {
      const status = error.response.status
      let message = ''
      switch (status) {
        case 400:
          message = '请求错误'
          break
        case 401:
          message = '鉴权过期'
          break
        case 404:
          message = '请求地址出错'
          break
        case 408:
          message = '请求超时'
          break
        case 500:
          message = '服务器内部错误!'
          break
        case 501:
          message = '服务未实现!'
          break
        case 502:
          message = '网关错误!'
          break
        case 503:
          message = '服务不可用!'
          break
        case 504:
          message = '网关超时!'
          break
        case 505:
          message = 'HTTP版本不受支持'
          break
        default:
          message = '请求失败'
      }
      const data = error.response.data
      if (data.error_description) {
        alert(data.error_description)
      } else {
        alert(message)
      }
      if (status === 401 || status === 403) {
        storeCommit('init')
        localStorage.clear()
        sessionStorage.clear()
        router.push('/')
      }
      return Promise.reject(error)
    }
    alert('服务器响应失败，请稍后再试')
    return Promise.reject(error)
  },
)

export default axios
