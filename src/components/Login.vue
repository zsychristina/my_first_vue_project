<template>
  <div class="note" :style ="note">
    <el-form
             style="position: absolute;top: 0;right: 0;bottom: 0;left: 0;margin: auto;width: 480px;height: 380px;
             background-color:rgba(0, 161, 255, 0.3);padding:50px 40px;border-radius:10px;">
      <el-form-item>
           <el-input v-model="info.account" placeholder="请输入账号" style="width: 400px;">
           </el-input>
      </el-form-item>
      <el-form-item>
           <el-input v-model="info.password" placeholder="请输入密码" style="width: 400px;">
           </el-input>
      </el-form-item>
      <el-form-item>
           <el-button type="primary"  size="small">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      info: {
        account: '',
        password: ''
      },
      note: {
        backgroundImage: 'url(' + require('../assets/login_background.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: '0px',
        minHeight: '930px'
      }
    }
  },
  methods: {
    login () {

    }
  }
}
</script>

<style>
#main{
    float: none;
    margin: 0 auto;
}
.el-input{
  padding-bottom: 5px;
  width: 400px;
}
</style>
