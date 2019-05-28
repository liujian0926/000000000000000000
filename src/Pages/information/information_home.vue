<template>
  <el-container class="container">
    <el-aside width="210px">
      <div class="title">信息审核</div>
      <el-menu class="el-menu" router default-active="data">
        <el-menu-item
          index="information_cash"
          @click="cil('information_cash')"
          :class="{'el-text-active':tabActive=='information_cash'}"
        >
          <i class="el-icon" :class="{'el-icon-active':tabActive=='information_cash'}"></i>
          <span slot="title">项目方提现</span>
        </el-menu-item>
        <el-menu-item
          index="A_real_name"
          @click="cil('A_real_name')"
          :class="{'el-text-active':tabActive=='A_real_name'}"
        >
          <i class="el-icon" :class="{'el-icon-active':tabActive=='A_real_name'}"></i>
          <span slot="title">A端实名审核</span>
        </el-menu-item>
        <el-menu-item
          index="B_real_name"
          @click="cil('B_real_name')"
          :class="{'el-text-active':tabActive=='B_real_name'}"
        >
          <i class="el-icon" :class="{'el-icon-active':tabActive=='B_real_name'}"></i>
          <span slot="title">B端实名审核</span>
        </el-menu-item>
        <el-menu-item
          index="agency_apply"
          @click="cil('agency_apply')"
          :class="{'el-text-active':tabActive=='agency_apply'}"
        >
          <i class="el-icon" :class="{'el-icon-active':tabActive=='agency_apply'}"></i>
          <span slot="title">代理申请审核</span>
        </el-menu-item>
        <el-menu-item
          index="aegncy_audit"
          @click="cil('aegncy_audit')"
          :class="{'el-text-active':tabActive=='aegncy_audit'}"
        >
          <i class="el-icon" :class="{'el-icon-active':tabActive=='aegncy_audit'}"></i>
          <span slot="title">代理提现审核</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <div style="width: 100%">
      <my-header></my-header>
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
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      tabActive: "information_cash"
    };
  },
  methods: {
    cil(value) {
      this.tabActive = value;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0;
  height: 100%;
  background-color: #fff;
 
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
      height: 64px;
      line-height: 64px;
      font-size: 24px;
      font-weight: bold;
      padding-left: 20px;
      box-sizing: border-box;
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
    width: 100%;
    height: 100%;
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
