<template>
  <div class="container">
    <div class="title">
      <div class="left">
        <img src="../assets/images/title.png" alt>
        <!-- <span>盾付宝运营后台</span> -->
      </div>
      <div class="right">
        <img src="../assets/images/man.png" alt>
        <span>Hank（002）</span>
        <img src="../assets/images/out.png" alt>
      </div>
    </div>

    <div class="content">
      <router-link :to="{path:'/home'}" class="text">
        <div class="box" id="active">
          <img src="../assets/images/wallet.png" alt>
          <span>平台钱包管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/run_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span>运营数据分析</span>
        </div>
      </router-link>
      <router-link :to="{path:'/terminal_home'}" class="text">
        <div class="box">
          <img src="../assets/images/terminal_1.png" alt>
          <span>终端管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/users_home'}" class="text">
        <div class="box">
          <img src="../assets/images/user_1.png" alt>
          <span>用户管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/immediately_home'}" class="text">
        <div class="box">
          <img src="../assets/images/deal_1.png" alt>
          <span>即时交易数据</span>
        </div>
      </router-link>
      <router-link :to="{path:'/information_home'}" class="text">
        <div class="box">
          <img src="../assets/images/info_1.png" alt>
          <span>信息审核管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/state_home'}" class="text">
        <div class="box">
          <img src="../assets/images/appeal_1.png" alt>
          <span>申诉管理</span>
        </div>
      </router-link>
      <router-link :to="{path:'/query_home'}" class="text">
        <div class="box">
          <img src="../assets/images/deal_data_1.png" alt>
          <span>交易数据查询</span>
        </div>
      </router-link>
      <router-link :to="{path:'/system_home'}" class="text">
        <div class="box">
          <img src="../assets/images/system_1.png" alt>
          <span>系统管理</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  .title {
    width: 100%;
    height: 64px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 27px 0 40px;
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

  .content {
    height: 100%;
    width: 100%;
    padding: 35px;
    box-sizing: border-box;
    background-color: #f5f6fa;
    overflow: auto;
    #active {
      background-color: #419eff;
      color: #fff;
    }
    .box {
      width: 320px;
      height: 180px;
      float: left;
      // padding: 0;
      background-color: #fff;
      box-sizing: border-box;
      margin-right: 30px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 18px;
      color: #253444;
      img {
        margin-bottom: 27px;
      }
      span {
        display: inline-block;
        width: 114px;
        height: 25px;
        text-align: center;
        line-height: 25px;
      }
    }
    .box:hover {
      background-color: #419eff;
      color: #fff;
    }
  }
}
</style>