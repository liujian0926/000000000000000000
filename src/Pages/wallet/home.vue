<template>
  <el-container class="my-container">
    <!--侧边栏 -->
    <el-aside width="210px">
      <div class="title">钱包管理</div>
      <el-menu class="el-menu-vertical-demo" router default-active="data">

        <el-menu-item index="data" @click="addTag('平台钱包数据')">
          <img src="../../assets/images/wallet_blue .png" alt>
          <span slot="title">平台钱包数据</span>
        </el-menu-item>
        
        <el-menu-item index="income">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">平台USDT收入支出</span>
        </el-menu-item>
        <el-menu-item index="platform_cash">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">平台USDT提现记录</span>
        </el-menu-item>
        <el-menu-item index="platform_earnings">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">平台积分收益记录</span>
        </el-menu-item>
        <el-menu-item index="project_usdt">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">项目方USDT充提记录</span>
        </el-menu-item>
        <el-menu-item index="project_exchange">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">项目方积分兑换记录</span>
        </el-menu-item>
        <el-menu-item index="project_recharge">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">项目方积分充提记录</span>
        </el-menu-item>
        <el-menu-item index="B_usdt">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">B端USDT充提记录</span>
        </el-menu-item>
        <el-menu-item index="B_exchange">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">B端积分兑换记录</span>
        </el-menu-item>
        <el-menu-item index="B_deal">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">B端积分买卖记录</span>
        </el-menu-item>
        <el-menu-item index="platform_usdt">
          <img src="../../assets/images/wallet_white.png" alt>
          <span slot="title">平台USDT提现</span>
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
            <el-breadcrumb-item :to="{ path:'/' }" v-for="(item,index) in tagList" :key="index">
              <el-tag
                @click="get(index)"
                @close="handleClose(item)"
                size="small"
                closable
                :type="item.type"
              >{{item.name}}</el-tag>
            </el-breadcrumb-item>
            <!-- <el-breadcrumb-item :to="{ path: '/' }"><el-tag size="small" closable>活动管理</el-tag></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }"><el-tag size="small" closable>活动列表</el-tag></el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }"><el-tag size="small" closable>活动详情</el-tag></el-breadcrumb-item>-->
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
    return {
      tagList: [
        { name: "首页", type: "" },
        { name: "活动管理", type: "" },
        { name: "活动列表", type: "" },
        { name: "活动详情", type: "" }
      ]
    };
  },
  methods: {
    handleClose(tag) {
      this.tagList.splice(this.tagList.indexOf(tag), 1);
    },
    get(index) {
      this.tagList[index].type = "info";
    },
    addTag(v) {
      console.log("111");
      this.tagList.push({ name: v, type: "" });
    }
  }
};
</script>
<style lang="less" scoped>
.my-container {
  height: 100%;
  width: 100%;
  .el-aside {
    width: 210px;
    background-color: #304156;
    height: 1600px;
    overflow: hidden;
    .title {
      color: #fff;
      text-align: left;
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
    box-shadow: 0px 2px 6px 0px rgba(48, 65, 86, 0.04);
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
    background-color: #fbfbfc;
  }

  #main {
    //  height: 696px;
    height: 100%;
    width: 100%;
    padding: 0;
  }
}
</style>
