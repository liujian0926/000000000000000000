<template>
  <div class="container">
    <div class="section1">
      <el-button type="warning">返回</el-button>
      <div class="content">
        <span class="title">用户名称:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">用户ID:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">用户电话:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">加入时间:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">项目方名称:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">项目方ID:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">代理名称:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">代理ID:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">是否实名:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content">
        <span class="title">账户状态:</span>
        <span class="username">HAJSK</span>
      </div>
      <div class="content" id="status">
        <span class="title">申诉次数:</span>
        <span class="username">禁止（剩余23小时58分）</span>
        <el-button type="primary">解除禁止</el-button>
      </div>
      <div class="content">
        <span class="title">被起诉次数:</span>
        <span class="username">HAJSK</span>
      </div>
    </div>
    <div class="section2">
      <div class="btn">
        <el-button type="primary">禁止交易</el-button>
        <el-button>设置禁止时长（小时）</el-button>
      </div>
      <div class="text">被禁之后，用户不能进行充值及提现，未完成订单依然可以继续交易</div>
    </div>
    <div class="section3">
      <el-table :data="dataList" border style="width: 100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
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
    border-bottom: 1px solid #CBCFDC;
    box-sizing: border-box;
    .el-button--warning {
      width: 60px;
      height: 28px;
      font-size: 12px;
      padding: 0;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 2px;
      background-color: #fdb44d;
    }
    .content {
      height: 21px;
      margin-top: 10px;
      .title {
        display: inline-block;
        height: 21px;
        width: 78px;
        color: #979dac;
        font-size: 14px;
        line-height: 21px;
        text-align: right;
      }
      .username {
        font-size: 14px;
        color: #253444;
        margin-left: 20px;
      }
    }
    #status {
      .username {
        display: inline-block;
        width: 169px;
        height: 20px;
        text-align: left;
        color: #e82b2b;
      }
      .el-button--primary {
        width: 68px;
        height: 24px;
        padding: 0;
        border-radius: 2px;
      }
    }
  }
  .section2 {
    height: 99px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .btn {
      .el-button--primary {
        width: 80px;
        height: 32px;
        padding: 0;
        font-size: 12px;
        color: #fff;
        margin-right: 20px;
      }
      .el-button--default {
        width: 152px;
        height: 32px;
        padding: 0;
        font-size: 12px;
        color: #979dac;
        margin-left: 0;
      }
    }
    .text {
      color: #979dac;
      font-size: 12px;
      letter-spacing: 1px;
      line-height: 17px;
      margin-top: 10px;
    }
  }
  .section3 {
    height: 71px;
    width: 100%;
    background-color: #eee;
  }
}
</style>
