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
    <div class="section3">
      <div class="title">买入额度设置</div>
      <div class="content">
        <span style="width:160px">普通用户最大买入不超过</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:140px">不超过缴纳保证金额度</span>
      </div>
      <div class="content">
        <span style="width:160px">会员VIP1最大买入不超过</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:140px">不超过缴纳保证金额度</span>
      </div>
      <div class="content">
        <span style="width:160px">会员VIP2最大买入不超过</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:140px">不超过缴纳保证金额度</span>
      </div>
      <div class="content">
        <span style="width:160px">会员VIP3最大买入不超过</span>
        <input type="text">
        <!-- <input type="checkbox"> -->
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:140px">不超过缴纳保证金额度</span>
      </div>

      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section4">
      <div class="content">
        <span style="width:60px">会员VIP1</span>
        <input type="text">
      </div>
      <div class="content">
        <span style="width:60px">会员VIP2</span>
        <input type="text">
      </div>
      <div class="content">
        <span style="width:60px">会员VIP3</span>
        <input type="text">
      </div>

      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section5">
      <div class="title">会员晋升条件设置</div>
      <div class="content">
        <span style="width:60px">会员VIP1</span>
        <span style="width:90px">直推下级人数</span>
        <input type="text">
      </div>
      <div class="content">
        <span style="width:60px">会员VIP2</span>
        <span style="width:90px">直推下级人数</span>
        <input type="text">
        <span style="width:160px">直推下级VIP1人数不少于</span>
        <input type="text">
      </div>
      <div class="content">
        <span style="width:60px">会员VIP3</span>
        <span style="width:90px">直推下级人数</span>
        <input type="text">
        <span style="width:160px">直推下级VIP2人数不少于</span>
        <input type="text">
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section6">
      <div class="title">不同等级会员卖出最大额度</div>
      <div class="content">
        <span>普通用户</span>
        <span style="width:60px">最大卖出</span>
        <input type="text">
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:50px;marginLeft:8px;">不限制</span>
      </div>
      <div class="content">
        <span>普通用户</span>
        <span style="width:60px">最大卖出</span>
        <input type="text">
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:50px;marginLeft:8px;">不限制</span>
      </div>
      <div class="content">
        <span>普通用户</span>
        <span style="width:60px">最大卖出</span>
        <input type="text">
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:50px;marginLeft:8px;">不限制</span>
      </div>
      <div class="content">
        <span>普通用户</span>
        <span style="width:60px">最大卖出</span>
        <input type="text">
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:50px;marginLeft:8px;">不限制</span>
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section7">
      <div class="title">手动或超时未付款到账订单取消，超过设定次数将被禁止交易24小时</div>
      <div class="content">
        <input type="text">
        <span>天</span>
        <el-checkbox v-model="checked"></el-checkbox>
        <span style="width:50px;marginLeft:8px;">不限制</span>
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section7">
      <div class="title">USDT兑换积分奖励比例</div>
      <div class="content">
        <input type="text">
        <span>%</span> 
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section7">
      <div class="title">USDT提现矿工费</div>
      <div class="content">
        <input type="text">
        <span>USDT</span>
      </div>
      <el-button type="primary">保存该项设置</el-button>
    </div>
    <div class="section7">
      <div class="title">买入奖励比例</div>
      <div class="content">
        <input type="text">
        <span>%</span>
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
  .section2,
  .section3,
  .section4,
  .section5,
  .section6,
  .section7 {
    padding: 0 30px;
    height: 276px;
    width: 100%;
    border-bottom: 1px solid #cbcfdc;
    box-sizing: border-box;
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
  .section3 {
    width: 100%;
    .content {
      .el-checkbox {
        margin-right: 8px;
      }
    }
  }
  .section4 {
    width: 100%;
    height: 204px;
    .content {
      input[type="text"] {
        margin-right: 55px;
      }
    }
  }
  .section5 {
    width: 100%;
    height: 244px;
  }
  .section6 {
    width: 100%;
    height: 282px;
  }
  .section7{
    width: 100%;
    height: 162px;
    .content{
      span:nth-of-type(1){
        margin-left: 10px;
        margin-right: 0;
        width: 14px;
      }
      .content .el-checkbox{
        margin-left: 47px;
      }
      span:nth-of-type(2){
        margin-left: 0px;
       
      }
    }
  }
}
</style>
