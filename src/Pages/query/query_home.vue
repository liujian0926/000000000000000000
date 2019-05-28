<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside width="210px">
      <div class="title">交易数据查询</div>
      <el-menu class="el-menu el-menu-vertical-demo" router default-active="data">
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

    <div style="width:100%;">
      <!-- 头部 -->
      <my-header></my-header>
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
    </div>
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
   
    jumpIndex () {
      this.$router.push({ path: '/' })
    },
    cli(value){
      this.tabActive = value;
    }
  }

};
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  padding: 0;
  .nav {
    height: 40px;
    width: 100%;
    padding: 0 35px;
    display: flex;
    align-items: center;
    background-color: #fbfbfc;
    box-sizing: border-box;
  }
  .el-aside {
    background-color: #304156;
    height: 1600px;
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
    height: 100%;
    width: 100%;
    padding: 0 23px;
    box-sizing: border-box;
  }
}

</style>
