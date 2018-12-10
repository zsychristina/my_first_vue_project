<template>
  <el-row>
    <el-col :xs="24" :sm="18" :md="14" :lg="10" id="main">
      <el-input v-model="info.name" placeholder="请输入账号"></el-input>
      <el-input v-model="info.age" placeholder="请输入密码"></el-input>
      <el-button class="btn-auto" @click="create" type="success">登录</el-button>
      <el-button class="btn-auto" @click="create" type="success">注册</el-button>

    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      info: {
        account: '',
        password: ''
      }
    }
  }
}
</script>

<style>

</style>
