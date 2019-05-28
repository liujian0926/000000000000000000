<template>
  <!-- 头部 -->
  <div class="my-header">
    <div class="left" @click="jumpIndex()">
      <img src="../assets/images/top-control.svg" alt>
      <span>控制台</span>
    </div>
    <div class="right">
      <img class="man" src="../assets/images/man.png" alt>
      {{userName}}
      <img class="out" src="../assets/images/out.png" alt @click="loginOut">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  created() {
    this.userName = localStorage.getItem("user");
  },
  methods: {
    loginOut() {
      this.$post("api/auth/out", { token: localStorage.getItem("token") })
        .then(res => {
          const codes = parseInt(res.data.code);
          if (codes === 0 || codes === 4) {
            localStorage.removeItem("token");
            this.$router.push("login");
          }
        })
        .catch(e => {
          const codes = parseInt(e.data.code);
          if (codes === 0 || codes === 4) {
            localStorage.removeItem("token");
            this.$router.push("login");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.my-header {
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;

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
      color: #979dac;
      height: 100%;
      line-height: 64px;
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
</style>
