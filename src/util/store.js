import ObjUtil from './obj'
import { WSAEINVALIDPROVIDER } from 'constants';
import { isNull } from 'util';

// 存储localStorage
export const setStore = (params) => {
  let {
    name,
    content,
    type,
    datetime
  } = params
  let obj = {
    dataType: typeof(content),
    content: content,
    type: type,
    datetime: new Date().getTime()
  }
  if(type) window.sessionStorage.setItem(name,JSON.stringify(obj))
  else window.localStorage.setItem(name, JSON.stringify(obj))
}

// 获取localStorage
export const getStore = (params) => {
  let {
    name,
    type,
    debug
  } = params
  let obj = {}
  let content = null
  obj = window.localStorage.getItem(name)
  if(ObjUtil.isEmpty(obj)) obj = window.sessionStorage.getItem(name)
  obj = JSON.parse(obj)
  if(debug){
    return obj
  }
  if(obj.dataType == 'string'){
    content = obj.content
  }else if(obj.dataType == 'number'){
    content = Number(obj.content)
  }else if(obj.dataType == 'boolean'){
    content = eval(obj.content)
  }else if(obj.dataType == 'object'){
    content = obj.content
  }
  return content
}

// 移除localStorage
export const removeStore = (params) => {
  let {
    name
  } = params
  window.localStorage.removeItem(name)
  window.sessionStorage.removeItem(name)
}

// 获取全部localStorage
export const getAllStore = (params) => {
  let list = []
  let {
    type
  } = params
  for(let i in window.sessionStorage){
    if(type){
      list.push({
        name: window.sessionStorage.key(i),
        content: getStore({
          name: window.sessionStorage.key(i),
          type: 'session'
        })
      })
    }else{
      list.push(getStore({
        name: window.localStorage.key(i),
        content: getStore({
          name:window.localStorage.key(i)
        })
      }))
    }
  }
  return list
}

// 清空全部localStorage
export const clearStore = (params) => {
  let {
    type
  } = params
  if(type){
    window.sessionStorage.clear()
    return
  }
  window.localStorage.clear()
}

// 获取token
export const getToken = (tokenKey) => {
  let tokenObj = {}
  if(!tokenKey){
    tokenObj = window.localStorage.getItem('token')
  }else{
    tokenObj = window.localStorage.getItem('token')
  }
  if(!tokenObj){
    return null
  }
  tokenObj = JSON.parse(tokenObj)
  return tokenObj.content
}
