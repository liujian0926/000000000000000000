<template>
  <el-container class="container">
    <el-aside width="210px">
      <div class="title">运营数据分析</div>
      <el-menu class="el-menu" router default-active="data">
        <el-menu-item index="observer" @click="getinfo($event)" class="active">
          <!-- <i class="el-icon-document"></i> -->
          <img src="../../assets/images/white.png" alt>
          <span slot="title">数据观察台</span>
        </el-menu-item>
        <el-menu-item index="analysis">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">平台收益分析</span>
        </el-menu-item>
        <el-menu-item index="B_users">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">B端用户分析</span>
        </el-menu-item>
        <el-menu-item index="A-users">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">A端用户分析</span>
        </el-menu-item>
        <el-menu-item index="order_data">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">订单数据分析</span>
        </el-menu-item>
        <el-menu-item index="B_deposit">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">B保证金分析</span>
        </el-menu-item>
        <el-menu-item index="habit">
          <img src="../../assets/images/white.png" alt>
          <span slot="title">交易习惯分析</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
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
  methods: {
    getinfo(event) {
      // console.log(event.$el)
      // console.log(event.$el.children[0])
      // console.log(event.$el.children[1])
      // event.$el.style.backgroundColor = "#253444";
      // event.$el.
      // console.log(event.$el)
      // event.$el.children[0].setAttribute('src','../../assets/images/blue.png');
      // event.$el.children[1].style.color = '#419EFF';
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0;
  height: 100%;
  background-color: #fff;
  .el-header {
    background-color: #fff;
    color: #333;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      height: 100%;
      line-height: 64px;
      font-size: 14px;
      color: #333333;
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
      color: #333333;
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
    height: 34px;
    padding: 0 24px;
    display: flex;
    align-items: center;
  }

  .el-aside {
    height: 1697px;
    background-color: #304156;
    .title {
      color: #fff;
      text-align: left;
      padding-left: 30px;
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
      &:active {
        background-color: #253444;
        color: #419eff;
      }
    }
  }

  #main {
    padding: 0;
    margin-top: 1px;
    background-color: #fff;
  }

  .el-form-item__label {
    line-height: 36px;
    font-size: 14px;
  }

  .el-form-item__content {
    height: 36px;

    #rmb {
      font-size: 12px;
      line-height: 17px;
      color: #999999;
      padding: 8px 0;
    }

    .el-input {
      height: 36px;

      .el-input__inner {
        height: 36px;
        line-height: 36px;
      }
    }
  }
}
</style>
