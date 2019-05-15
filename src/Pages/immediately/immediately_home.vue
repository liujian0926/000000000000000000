<template>
  <el-container class="my-container">
    <!--侧边栏 -->
    <el-aside width="210px">
      <div class="title">即时交易数</div>
      <el-menu class="el-menu" router default-active="data">

        <el-menu-item index="immediately_buy">
          <!-- <i class="el-icon-document"></i> -->
          <img src="../../assets/images/blue.png" alt>
          <span slot="title">买入提现</span>
        </el-menu-item>
        <el-menu-item index="immediately_sale">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">卖出充值</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height:64px;" class="header">
        <div class="left">
          <img src="../../assets/images/contr.png" alt>
          <span>控制台</span>
        </div>
        <div class="right">
          <img class="man" src="../../assets/images/man.png" alt>
          <span>Hank（002）</span>
          <img class="out" src="../../assets/images/out.png" alt>
        </div>
      </el-header>
      <div class="nav">
        <template>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">活动列表</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </template>
      </div>
      <el-main id="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.my-container {
  height: 100%;
  width: 100%;
  .el-aside {
    width: 210px;
    background-color: #304156;
    height: 800px;
    .title {
      color: #fff;
      text-align:left;
      height: 64px;
      line-height: 64px;
      font-size: 24px;
      font-weight: bold;
      padding-left: 20px;
    }

    .el-menu {
      border: none;
      .el-menu-item {
        height: 60px;
        font-size: 14px;
        color: #bfcbd8;
        background-color: #304156;
        img {
          margin-right: 16px;
        }

        &:hover {
          background-color: #1e2c3c;
          color: #419eff;
        }
      }
    }
  }

  .header {
    width: 100%;
    height: 64px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 27px 0 40px;
    box-shadow:0px 2px 6px 0px rgba(48,65,86,0.04);
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      line-height: 64px;
      color: #333333;
      font-weight: bold;
      font-size: 14px;
      img {
        margin-right: 10px;
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #666666;
      font-size: 14px;
      line-height: 64px;
      span {
        margin-right: 17px;
        margin-left: 10px;
      }
    }
  }
  .nav {
    height: 40px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    background-color: #FBFBFC;
  }

  #main {
  //  height: 696px;
  height: 100%;
   width: 100%;
   padding: 0;
  }
}
</style>
