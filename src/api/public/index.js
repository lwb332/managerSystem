import http from '@/util/http'

class Login {
  login(params){
    const url = '/api/login'
    return http.post(url, params)
  }
}

export default Login