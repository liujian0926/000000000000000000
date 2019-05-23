<template>
  <el-container class="container">
    <!-- 侧边栏 -->
    <el-aside width="210px">
      <div class="title">用户管理</div>
      <el-menu class="el-menu" router default-active="data">
        <!-- <el-menu-item index="A_userManager">
           <i class="el-icon-document"></i> -->
          <!-- <img src="../../assets/images/blue.png" alt>
          <span slot="title">A端用户管理</span> -->
        <!-- </el-menu-item> -->
        <el-menu-item index="B_userManager">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">B端用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header style="height:64px;">
        <div class="left">
          <img src="../../assets/images/top-control.svg" alt>
          <span>控制台</span>
        </div>
        <div class="right">
          <img class="man" src="../../assets/images/man.png" alt>
          Hank（002）
          <img class="out" src="../../assets/images/out.png" alt>
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
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scope>
.container {
  height: 100%;
  width: 100%;
  padding: 0;
  .el-header {
    padding: 0 35px;
    background-color: #fff;
    height: 64px;
    width: 100%;
    color: #979DAC;
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
    background-color: #FBFBFC;
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
    height: 696px;
    width: 100%;
    background-color: #fff;
  }

  
}
</style>
