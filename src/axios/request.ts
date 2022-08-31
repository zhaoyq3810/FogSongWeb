import qs from 'qs'
import axios from './index'
import { IObj, IAxiosReqParams } from '@/interface'

/**
 * get 请求方法
 * @param {String} url [请求地址]
 * @param {Object} params [请求参数]
 */
export const getReq = (url: string, params?: IObj) => {
  const config: IAxiosReqParams = {
    url,
    method: 'get',
  }
  if (params) {
    config.params = params || {}
  }
  return axios(config)
}

/**
 * post 请求方法
 * @param {String} url [请求地址]
 * @param {Object} params [请求参数]
 */
export const postReq = (url: string, params?: IObj) => axios({
  url,
  method: 'post',
  data: params,
  transformRequest: [(params: IObj) => qs.stringify(params)],
})

/**
 * post 请求方法
 * @param {String} url [请求地址]
 * @param {Object} params [请求参数]
 * @headers 特定格式，用于上传文件
 */
export const postFileReq = (url: string, params?: IObj) => axios({
  url,
  method: 'post',
  data: params,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
