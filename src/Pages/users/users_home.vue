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
        <el-menu-item index="B_userManager"  @click="cli('B_userManager')" :class="{'el-text-active':tabActive =='B_userManager'}">
          <i class="el-icon" :class="{'el-icon-active':tabActive =='B_userManager'}"></i>
          <span slot="title">B端用户管理</span>
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
      tabActive:'B_userManager'
    };
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
  // height: 800px;
  width: 100%;
  padding: 0;
  
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
    // // height: 800px;
    // position: relative;
    // left: 0;
    // top: 0;
    // bottom: 0;
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
