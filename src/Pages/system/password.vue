<template>
  <div class="container">
    <el-button type="warning">返回</el-button>
    <el-form :label-position="right" class="self-form">
      <el-form-item label="账号:">
        <el-input v-model="value" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="value" placeholder="请输入内容"></el-input>
      </el-form-item>
        <router-link :to="{path:'/visit'}">
            <el-button type="primary">访问资金密码</el-button>
        </router-link>
      
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'',
      labelPosition: "right"
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f5f6fa;
  padding: 20px 30px 0 30px;
  box-sizing: border-box;
  .el-button--warning {
    width: 60px;
    height: 28px;
    padding: 0;
    border-radius: 2px;
  }
  .self-form {
    .el-button--primary {
      margin-top: 20px;
      margin-left: 80px;
      width: 126px;
      height: 32px;
      padding: 0;
      border-radius: 2px;
    }
  }
}
</style>
