 
<template>
  <div class="container">
    <div class="title">
      <img src="../assets/images/logo.png" alt>
    </div>

    <el-form
      class="login-form"
      label-width="80px"
      label-position="right"
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入您的账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="submit('loginForm')">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, message: "长度在4-20个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用密码", trigger: "blur" },
          { min: 6, message: "长度在6-20个字符", trigger: "blur" }
        ]
      }
    };
  },
  // 方法
  methods: {
    // 登陆验证
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 跳转到首页
          this.$router.push("/");
        } else {
          // 失败
          this.$message.error("数据格式错误");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    this.$post('/api/auth/adminList').then(res=>{
      console.log(res)
    })
  },
};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('../assets/images/loginbgc.jpg') no-repeat center/cover; 
  .title {
    height: 58px;
    margin-bottom: 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
     width: 400px;
     height: 58px;
    }
  }
}
</style>

