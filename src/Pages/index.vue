<template>
  <div class="container">
    <div class="title">
      <div class="left">
        <img src="../assets/images/title.png" alt>
        <!-- <span>盾付宝运营后台</span> -->
      </div>
      <div class="right">
        <img src="../assets/images/man.png" alt>
        <span>admin</span>
        <img src="../assets/images/out.png" alt @click="loginOut">
      </div>
    </div>

    <div class="content"> 
      <!-- <router-link :to="{path:'/home'}" class="text">
        <div class="box" id="active">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>平台钱包管理</span>
        </div> -->
        <!--
      </router-link>
      <router-link :to="{path:'/run_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>运营数据分析</span>
        </div>
      </router-link>
      <router-link :to="{path:'/terminal_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>终端管理</span>
        </div>
      </router-link> -->
      <router-link :to="{path:'/B_userManager'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>用户管理</span>
        </div>
      </router-link>
      <!-- <router-link :to="{path:'/immediately_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>即时交易数据</span>
        </div>-->
      <!-- </router-link> -->
      <!-- <router-link :to="{path:'/information_cash'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>信息审核管理</span>
        </div>
      </router-link> -->

      <!-- <router-link :to="{path:'/state_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>申诉管理</span>
        </div>
      </router-link> -->
      <router-link :to="{path:'/buy_order'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>交易数据查询</span>
        </div>
      </router-link>
      <!-- <router-link :to="{path:'/system_home'}" class="text">
        <div class="box">
          <img src="../assets/images/run-1.png" alt>
          <span class="pic"></span>
          <span>系统管理</span>
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created () {
    // 暂时默认进入
    // this.comein()
    this.getList()
  },
  methods: {
    // comein () {
    //   this.$router.push({path:'/users_home'})
    // },
    getList() {
      // 处理
      
      this.$post("api/user/bList", {token:localStorage.getItem("token")}).then(res=>{
      })
    },
    loginOut() {
      this.$post("api/auth/out", {token:localStorage.getItem("token")})
        .then(
          res => {
            const codes = parseInt(res.data.code)
            if (codes === 0 || codes === 4) {
              localStorage.removeItem("token");
              this.$router.push("login");
            }
          }
        )
        .catch(e => {
          const codes = parseInt(e.data.code)
          if (codes === 0 || codes === 4) {
            localStorage.removeItem("token");
            this.$router.push("login");
          }
        })
    },
  }
};
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
    // #active {
    //   background-color: #419eff;
    //   color: #fff;
    // }
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
      .pic {
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
      .pic {
        display: inline-block;
        width: 64px;
        height: 64px;
        background: url("../assets/images/wallet.png") no-repeat center;
      }
      img {
        display: none;
      }
    }
  }
}
</style>