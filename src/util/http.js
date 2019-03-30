import axios from 'axios'
import Sign from '@/util/sign'
import {getToken} from '@/util/store'
import store from '../store'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message, Error } from 'element-ui'

// 修改默认响应超时时间
axios.defaults.timeout = 60000

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// 禁用进度条循环动画
nprogress.configure({ showSpinner: false })

// http拦截，req
axios.interceptors.request.use( config => {
  let sign = new Sign()
  // 给每个请求都带上token
  if(getToken()){
    config['headers']['Authorization'] = getToken()
  }
  let privateKey = sign.getPrivateKey()
  let timestamp = new Date().getTime()
  if(config.method == 'post'){
    let signParams = {
      ...config.data,
      _privateKey: privateKey,
      _timestamp: timestamp
    }
    /* config.header['_timestamp'] = timestamp
    config.header['_signature'] = sign.sha1Obj(signParams) */
  }
  return config
}, error => {
  console.log( 'error:' + error )
  return Promise.reject(error)
})

// http拦截，res
axios.interceptors.response.use( data => {
  // 执行进度条动画
  nprogress.done()
  // 根据后台返回code判断请求是否成功，可根据项目自己定义
  if(data.data.code != '1'){
    Message({ showClose: true, message: data.data.msg, type: 'warning'})
    return Promise.reject(data.data.msg)
  }
  return data.data
}/* , error => {
  nprogress.done()
  console.error(error)
  if(error.response.status === 500){
    if(error.response.data.code === 603 || error.response.data.code === 700){
      Message({ showClose: true, message: error.response.data.msg, type: 'error'})
      store.dispatch('clearToken')
      store.dispatch('clearLock')
      store.dispatch('clearTag')
      router.push({path: '/login'})
      return Promise.reject(error.response.data.msg)
    }else{
      if(error.response.data.msg == '应用不存在' ||error.response.data.msg == '请联系管理员为您分配应用'){
        return
      }
      if(!error.response.data.msg){
        Message({ showClose: true, message: error.response.data.msg, type: 'error'})
        return Promise.reject(error.response.data.msg)
      }
      Message({ showClose: true, message: error.response.data.msg, type: 'error'})
      return Promise.reject(error.response.data.msg)
    }
  }else{
    Message({ showClose: true, message: error.response.data.msg, type: 'error'})
    return Promise.reject(error.response.data.msg)
  }
} */)

const http = {
  /* 
   * 自定义请求
   * get, post
  */
  get: function(url, params, config){
    if(!params){
      params = {}
    }
    return axios.get(url, {param: params}, config)
  },

  post: function(url, params, config){
    if(!params){
      params = {}
    }
    return axios.post(url, params, config)
  }
}

export default http
