<template>
  <div class="container">
    <div class="section1"></div>
    <div class="section2">
      <div class="btn">
        <el-button type="primary">禁止交易</el-button>
        <el-button>设置禁止时长（小时）</el-button>
      </div>
      <div class="text">被禁之后，用户不能进行充值及提现，未完成订单依然可以继续交易</div>
    </div>
    <div class="section3">
      <el-table :data="dataList" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          date: "2019-20",
          name: "ccc"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 696px;
  padding: 0 7px;
  background-color: #fff;
  .section1 {
    height: 458px;
    width: 100%;
    background-color: #bbb;
  }
  .section2 {
    height: 99px;
    width: 100%;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section3 {
    height: 71px;
    width: 100%;
    background-color: #eee;
  }
}
</style>
