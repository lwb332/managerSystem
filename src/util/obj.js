// 字符串工具类
class ObjUtil{
  static isEmpty(obj){
    //null 或者 undefined
    if(!obj){
      return true
    }

    // {}
    if(obj == {}){
      return true
    }

    // []
    if(obj == []){
      return true
    }

    return false
  }
}

export default ObjUtil