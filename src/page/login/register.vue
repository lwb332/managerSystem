<template>
  <div class="hello">
    <el-card class="main-card">
      <el-form
        :model="accountInfo"
        status-icon
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="account">
          <el-input type="password" v-model="accountInfo.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="accountInfo.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="accountInfo.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('accountInfo')">提交</el-button>
          <el-button @click="resetForm('accountInfo')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      accountInfo: {},
      msg: '123'
    }
  },
  methods: {
    submitForm () {},
    resetForm () {}
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
