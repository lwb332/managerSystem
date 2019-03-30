import { setStore, getStore, removeStore } from '@/util/store'
import router from '@/router/router'

const user = {
  state: {
    userInfo: {},
    acconut: {},
    roles: []
  },

  actions: {
    // 储存个人信息
    setUserInfo({commit, state, dispatch}, data) {
      return new Promise((resolve, reject) => {
        commit('SET_USERIFNO', data)
        resolve()
      })
    }
  },

  mutations: {
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo.userInfo
      state.acconut = userInfo.acconut
      let defaultCompany = userInfo.company.find(i => {
        return i.defalut == 'Y'
      })
      state.defaultCompany = defaultCompany ? defaultCompany : {}
    }
  }
}
export default user