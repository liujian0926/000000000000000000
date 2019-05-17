<template>
  <div class="container">
    <div class="section1">
      <div class="title">会员等级买卖次数设置</div>
      <div class="content">
        <span>普通用户</span>
        <span>买入</span>
        <input type="text">
        <span>卖出</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span>不限制</span>
      </div>
      <div class="content">
        <span>普通用户</span>
        <span>买入</span>
        <input type="text">
        <span>卖出</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span>不限制</span>
      </div>
      <div class="content">
        <span>普通用户</span>
        <span>买入</span>
        <input type="text">
        <span>卖出</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span>不限制</span>
      </div>
      <div class="content">
        <span>普通用户</span>
        <span>买入</span>
        <input type="text">
        <span>卖出</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span>不限制</span>
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section2">
      <div class="title">会员等级买卖次数设置</div>
      <div class="content">
        <span style="width:280px">激活买入接单并且享受团队收益需缴纳保证金</span>
        <input type="text">
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .section1,
  .section2 {
    padding: 0 30px;
    height: 276px;
    width: 100%;
    border-bottom: 1px solid #cbcfdc;
    .title {
      font-size: 16px;
      color: #253444;
      margin-top: 20px;
    }
    .content {
      height: 28px;
      margin-top: 10px;
      display: flex;
      align-items: center;
      span:nth-of-type(1) {
        height: 28px;
        width: 56px;
        line-height: 28px;
        margin-right: 30px;
        font-size: 14px;
        color: #979dac;
      }
      span:nth-of-type(2) {
        height: 28px;
        width: 30px;
        line-height: 28px;
        margin-right: 8px;
        font-size: 14px;
        color: #979dac;
      }
      span:nth-of-type(3) {
        height: 28px;
        width: 30px;
        line-height: 28px;
        margin-left: 24px;
        margin-right: 8px;
        font-size: 14px;
        color: #979dac;
      }
      span:nth-of-type(4) {
        height: 28px;
        width: 42px;
        line-height: 28px;
        margin-left: 8px;
        font-size: 14px;
        color: #979dac;
      }
      input[type="text"] {
        width: 80px;
      }
      .el-checkbox {
        margin-right: 0;
        margin-left: 36px;
        width: 16px;
        height: 16px;
      }
    }
    .el-button--primary {
      width: 134px;
      height: 32px;
      padding: 0;
      border-radius: 2px;
      margin-top: 28px;
    }
  }
  .section2 {
    padding: 0 30px;
    height: 162px;
    width: 100%;
    border-bottom: 1px solid #cbcfdc;
  }
}
</style>
