<template>
  <div class="container">
    <el-button type="warning">返回</el-button>
    <el-form :label-position="right" class="self-form">
     
      <el-form-item label="姓名:">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="电话:">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="是否在职:">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="入职时间:">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="账号状态:">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色权限:">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="修改密码:">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-button type="primary">新增</el-button>
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
    .title {
      margin-bottom: 16px;
      span:nth-of-type(1) {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin-right: 20px;
        width: 60px;
        font-size: 14px;
        color: #979dac;
        text-align: right;
      }
    }
  }
}
</style>
