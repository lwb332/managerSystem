const getters = {
  userInfo: state => state.user.userInfo,
  account: state => state.user.account,
  token: state => state.user.token,
  roles: state => state.user.roles
}

export default getters