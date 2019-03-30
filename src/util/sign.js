import crypto from 'crypto'
import {getToken} from '@/util/store'
class Sign{
  getPrivateKey(){
    let token = getToken()
    if(!getToken()){
      return null
    }
    let tokenParts = getToken().split('.')
    return tokenParts.pop()
  }

  // 按照指定排序，sha1加密字符串
  sha1Obj(obj, sort){
    let keys = Object.keys(obj).sort();
    // 便利排序后的参数数组中的每一个key/value对
    let str = ''
    keys.forEach(key => {
      if(typeof(boj[key]) != 'object' &&
        typeof(obj[key]) != 'undefined' &&
        obj[key] != null)
      {
        str = str + key + '=' + obj[key] + '&'
      }
    })

    //通过md5算法为签名字符串生成一个md5签名，该签名就是我们要追加的sign参数值
    let result = this.sha1Str(str)
    console.log(result)
    return result
  }

  // sha1 加密字符串
  sha1Str(str){
    const hash = crypto.createHash('sha1')
    hash.update(str)
    return hash.digest('hex').toUpperCase()
  }
}

export default Sign