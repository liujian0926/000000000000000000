<template>
  <div class="container">
    <el-button type="warning">返回</el-button>
    <el-form :label-position="right" class="self-form">
      <el-form-item label="原密码:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="新密码:">
        <el-input></el-input>
      </el-form-item>
      <el-button type="primary">保存修改</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right"
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 696px;
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
      width: 80px;
      height: 32px;
      padding: 0;
      border-radius: 2px;
    }
  }
}
</style>
