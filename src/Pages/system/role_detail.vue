<template>
  <div class="container">
    <el-button type="warning">返回</el-button>
    <el-button type="danger">取消</el-button>
    <el-button type="primary">保存</el-button>
    <el-form :label-position="right" class="self-form">
      <el-form-item label="角色名称:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="角色描述:">
        <el-input></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="一级" ></el-table-column>
      <el-table-column prop="name" label="二级" ></el-table-column>
      <el-table-column prop="address" label="权限配置规则"></el-table-column>
    </el-table>
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
  height: 100%;
  background-color: #f5f6fa;
  padding: 20px 30px 0 30px;
  box-sizing: border-box;
  .el-button--warning,
  .el-button--primary,
  .el-button--danger {
    width: 60px;
    height: 28px;
    padding: 0;
    border-radius: 2px;
  }
  .el-button--primary,
  .el-button--danger {
    width: 100px;
  }
  .self-form{
      margin-bottom: 20px;
  }
}
</style>
