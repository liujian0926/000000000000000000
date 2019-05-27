<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside width="210px">
      <div class="title">交易数据查询</div>
      <el-menu class="el-menu el-menu-vertical-demo" router default-active="data" @open="handleOpen" @close="handleClose">
        <el-menu-item index="buy_order" @click="cli('buy_order')" :class="{'el-text-active':tabActive=='buy_order'}">
          <i class="el-icon" :class="{'el-icon-active':tabActive=='buy_order'}"></i>
          <span slot="title">买入订单记录</span>
        </el-menu-item>
        <el-menu-item index="sale_order" @click="cli('sale_order')" :class="{'el-text-active':tabActive=='sale_order'}">
           <i class="el-icon" :class="{'el-icon-active':tabActive=='sale_order'}"></i>
          <span slot="title">卖出订单记录</span>
        </el-menu-item> 
       <el-menu-item index="recharge_order" @click="cli('recharge_order')" :class="{'el-text-active':tabActive=='recharge_order'}">
           <i class="el-icon" :class="{'el-icon-active':tabActive=='recharge_order'}"></i>
          <span slot="title">充值订单记录</span>
        </el-menu-item> 
        <el-menu-item index="cash_order" @click="cli('cash_order')" :class="{'el-text-active':tabActive=='cash_order'}">
          <i class="el-icon" :class="{'el-icon-active':tabActive=='cash_order'}"></i>
          <span slot="title">提现订单记录</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header style="height:64px;">
        <div class="left">
          <img src="../../assets/images/top-control.svg" alt>
          控制台
        </div>
        <div class="right">
          <img class="man" src="../../assets/images/man.png" alt>
          {{userName}}
          <img class="out" src="../../assets/images/out.png" alt @click="loginOut">
        </div>
      </el-header>
      <!-- 面包屑导航 -->
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

      <!-- 主体部分 -->

      <el-main id="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    this.userName = localStorage.getItem('user')
  },
  data() {
    return {
      userName: '',
      tabActive: 'buy_order'
    }
  },
  methods: {
    loginOut() {
      this.$post("api/auth/out", {token:localStorage.getItem("token")}).then(
        res => {
          if (res.data.code === 0) {
            localStorage.removeItem("token");
            this.$router.push("login");
          }
        }
      )
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath, '4552552----3-3-3');
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    cli(ve) {
     this.tabActive = ve
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  // height: 800px;
  width: 100%;
  padding: 0;
  .el-header {
    padding: 0 35px;
    background-color: #fff;
    height: 64px;
    width: 100%;
    color: #979dac;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .left {
      height: 100%;
      line-height: 64px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 3px;
      }
      span {
        color: #979DAC;
      }
    }

    .right {
      height: 64px;
      line-height: 64px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;

      .man {
        margin-right: 8px;
      }

      .out {
        margin-left: 23px;
      }
    }
  }
  .nav {
    height: 40px;
    width: 100%;
    padding: 0 35px;
    display: flex;
    align-items: center;
    background-color: #fbfbfc;
  }
  .el-aside {
    background-color: #304156;
    // height: 800px;
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;

    .title {
      color: #fff;
      text-align: left;
      padding-left: 20px;
      box-sizing: border-box;
      height: 64px;
      line-height: 64px;
      font-size: 24px;
      font-weight: bold;
    }

    .el-menu {
      border: none;
    }

    .el-menu-item {
      height: 60px;
      font-size: 14px;
      letter-spacing: 1px;
      color: #bfcbd8;
      background-color: #304156;
      img {
        margin-right: 16px;
      }

      &:hover {
        background-color: #253444;
        color: #419eff;
      }
    }
  }

  #main {
    height: 696px;
    width: 100%;
    padding: 0 23px;
  }
}
.el-icon{
  display: inline-block;
  width: 14px;
  height: 16px;
  background: url('../../assets/images/white.png') center / 100% no-repeat;
  margin-right: 16px;
}
.el-icon-active{
  background: url('../../assets/images/blue.png') center / 100% no-repeat !important;
}
.el-text-active{
  color: #419EFF !important;

}
</style>
