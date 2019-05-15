<template>
  <div class="container">
    <el-button type="warning">返回</el-button>
    <div class="title">用户信息</div>
    <!-- 表格-->
    <el-table
      class="table"
      :data="tableData"
      border
      style="width: 100% ;"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      row-style="height:30px"
    >
      <el-table-column prop="username" label="用户名" align="center"></el-table-column>
      <el-table-column prop="user_id" label="用户ID" align="center"></el-table-column>
    </el-table>
    <div class="title">订单信息</div>
    <!-- 表格-->
    <el-table
      class="table"
      :data="tableData"
      border
      style="width: 100% ;"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      row-style="height:30px"
    >
      <el-table-column prop="username" label="用户名" align="center"></el-table-column>
      <el-table-column prop="user_id" label="用户ID" align="center"></el-table-column>
    </el-table>
    <div class="title">关联订单</div>
    <!-- 表格-->
    <el-table
      class="table"
      :data="tableData"
      border
      style="width: 100% ;"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      row-style="height:30px"
    >
      <el-table-column prop="username" label="用户名" align="center"></el-table-column>
      <el-table-column prop="user_id" label="用户ID" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  padding: 20px 30px 0 30px;
  box-sizing: border-box;
  height: 696px;
  width: 100%;
  background-color: #fff;
  .el-button--warning {
    width: 60px;
    height: 28px;
    padding: 0;
    border-radius: 2px;
  }
  .title {
      width: 59px;
      height: 20px;
      color: #253444;
      font-size: 14px;
      font-weight: bold;
      margin: 20px 0 10px 0;
  }
}
</style>
