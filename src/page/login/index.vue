<template>
  <div class="hello">
    <el-card class="main-card">
      <el-form
        :model="accountInfo"
        status-icon
        :rules="rules"
        label-width="100px"
        ref="accountInfo"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="accountInfo.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="accountInfo.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('accountInfo')">登陆</el-button>
          <el-button @click="resetForm('accountInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Login from '@/api/public/index'
export default {
  name: 'log',
  data () {
    return {
      accountInfo: {
        account: '',
        password: '',
        Comlist: [
          {id:1,label:1,value1:'value',value:''},
          {id:2,label:2,value1:'value',value:''},
          {id:4,label:4,value1:'value',value:''},
          {id:3,label:3,value1:'value',value:''}
        ]
      },
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      msg: ''
    }
  },
  methods: {
    submitForm (refName) {
      this.$refs[refName].validate(vaild => {
        if (vaild) {
          const login = new Login()
          login.login(this.accountInfo).then(res => {
            alert(res.message)
          })
        }
      })
    },
    resetForm (refName) {
      this.$refs[refName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-card {
  width: 400px;
  margin: 0 auto;
}
</style>
