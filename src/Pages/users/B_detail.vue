<template>
  <div class="container">
    <div class="section1">
      <router-link :to="{path:'/B_userManager'}">
        <el-button type="warning">返回</el-button>
      </router-link>

      <template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="基本信息" name="first">
            <div class="content">
              <span class="title">用户名称:</span>
              <span class="username">{{infoData.name}}</span>
            </div>
            <div class="content">
              <span class="title">用户ID:</span>
              <span class="username">{{infoData.id}}</span>
            </div>
            <!-- <div class="content">
              <span class="title">电话:</span>
              <span class="username">{{infoData.name}}</span>
            </div>-->
            <div class="content">
              <span class="title">邮箱:</span>
              <span class="username">{{infoData.email}}</span>
            </div>
            <div class="content">
              <span class="title">会员级别:</span>
              <span class="username">{{infoData.grant_text}}</span>
            </div>
            <div class="content">
              <span class="title">推荐方:</span>
              <span class="username">{{infoData.pid_name}}</span>
            </div>
            <div class="content">
              <span class="title">推荐人ID:</span>
              <span class="username">{{infoData.pid}}</span>
            </div>
            <div class="content">
              <span class="title">直推人数:</span>
              <span class="username">{{infoData.child_num}}</span>
            </div>
            <div class="content">
              <span class="title">三级人数:</span>
              <span class="username">{{infoData.child_three_num}}</span>
            </div>
            <div class="content">
              <span class="title">保证金:</span>
              <span class="username">{{infoData.deposit}}</span>
            </div>
            <div class="content">
              <span class="title">加入时间:</span>
              <span class="username">{{infoData.add_time}}</span>
            </div>
            <div class="content">
              <span class="title">接单总收益:</span>
              <span class="username">{{infoData.total_receipts}}</span>
            </div>
            <div class="content">
              <span class="title">团队奖励总收益:</span>
              <span class="username">{{infoData.total_reward_team_award}}</span>
            </div>
            <div class="content">
              <span class="title">usdt余额:</span>
              <span class="username">{{infoData.usdt_num}}</span>
            </div>
            <!-- <div class="content">
              <span class="title">项目方名称:</span>
              <span class="username">{{infoData.name}}</span>
            </div>
            <div class="content">
              <span class="title">项目方ID:</span>
              <span class="username">{{infoData.name}}</span>
            </div>
            <div class="content">
              <span class="title">代理名称:</span>
              <span class="username">{{infoData.name}}</span>
            </div>
            <div class="content">
              <span class="title">代理ID:</span>
              <span class="username">{{infoData.name}}</span>
            </div>-->

            <!-- <div class="content">
              <span class="title">是否实名:</span>
              <span class="username">{{infoData.name}}</span>
            </div>

            <div class="content" id="status">
              <span class="title">账户状态:</span>
              <span class="username">禁止（剩余23小时58分）</span>
              <el-button type="primary">解除禁止</el-button>
            </div>
            <div class="content">
              <span class="title">申诉次数:</span>
              <span class="username">{{infoData.name}}</span>
            </div>
            <div class="content">
              <span class="title">被起诉次数:</span>
              <span class="username">{{infoData.name}}</span>
            </div>-->
          </el-tab-pane>

          <!-- <el-tab-pane label="下级成员" name="second">
            <div class="box">
              <div class="recommend">
                <div class="person">直推人数</div>
                <div class="number">259</div>
              </div>
              <div class="recommend">
                <div class="person">直推人数</div>
                <div class="number">259</div>
              </div>
              <div class="recommend">
                <div class="person">直推人数</div>
                <div class="number">259</div>
              </div>
              <div class="recommend">
                <div class="person">直推人数</div>
                <div class="number">259</div>
              </div>
              <div class="recommend">
                <div class="person">直推人数</div>
                <div class="number">259</div>
              </div>
          </div>-->
          <!-- 选择框 -->
          <!-- <el-select v-model="value" placeholder="直推下级"> -->
          <!-- <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
          ></el-option>-->
          <!-- </el-select> -->
          <!-- 表格 -->
          <!-- <el-table :data="dataList1" border style="width: 100%" class="my-table">
              <el-table-column prop="date" label="日期"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
              <el-table-column prop="name" label="姓名"></el-table-column>
          </el-table>-->
          <!-- </el-tab-pane>  -->
        </el-tabs>
      </template>
    </div>
    <!-- <div class="section2">
      <div class="btn">
        <el-button type="primary">禁止交易</el-button>
        <el-button>设置禁止时长（小时）</el-button>
      </div>
      <div class="text">被禁之后，用户不能进行充值及提现，未完成订单依然可以继续交易</div>
      <el-table :data="dataList" border style="width: 590px" class="my-table">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
      </el-table>
    </div>-->

    <div class="section3">
      <div class="title">手动增减USDT数量</div>
      <div class="input">
        <el-input v-model="input" placeholder="输入增减USDT数量" style="width:265px" @input="handleInput"></el-input>
        <span>当前USDT余额83872</span>
      </div>
      <div class="input">
        <el-input v-model="inputRemark" placeholder="输入原因" style="width:265px"></el-input>
      </div>
      <span></span>
      <div class="btn">
        <el-button type="primary" @click="addNum(1)">增加</el-button>
        <el-button type="danger" @click="addNum(0)">减少</el-button>
      </div>
      <el-table :data="addTable" border style="width: 100%">
        <el-table-column prop="num" label="金额"></el-table-column>
        <el-table-column prop="flag" label="类型"></el-table-column>
        <el-table-column prop="admin_id" label="操作员ID"></el-table-column>
        <el-table-column prop="remark" label="原因"></el-table-column>
        <el-table-column prop="create_time" label="操作时间"></el-table-column>
      </el-table>
    </div>

    <!-- <div class="section4">
      <div class="title">手动扣除保证金</div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入内容" style="width:265px"></el-input>
        <span>当前可扣除保证金10000</span>
      </div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入内容" style="width:265px"></el-input>
        <span class="circle"></span>
        <span class="email">短信及邮件通知</span>
      </div>
      <span></span>
      <div class="btn">
        <el-button type="primary">扣除</el-button>
      </div>
      <el-table :data="dataList" border style="width: 100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
      </el-table>
    </div>-->
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  data() {
    return {
      infoData: {},
      addTable: [],
      input: "",
      inputRemark: "",
      value: 0,
      activeName: "first",
      dataList: [
        {
          date: "2019-20",
          name: "ccc"
        }
      ],
      dataList1: [{}, {}, {}, {}, {}, {}, {}]
    };
  },
  mounted() {
    this.detailList();
    this.addList();
    // this.addNum();
  },
  methods: {
    detailList() {
      const data = {
        token: localStorage.getItem("token"),
        user_id: this.$route.query.id
      };
      this.$post("/api/user/bInfo", data).then(res => {
        this.infoData = res.data.data;
      });
    },
    addList() {
      const data = {
        token: localStorage.getItem("token"),
        user_id: this.$route.query.id
      };
      this.$post("/api/user/usdtChangeList", data).then(res => {
        this.addTable = res.data.data;
      });
    },

    //
    addNum(val) {
      const data = {
        token: localStorage.getItem("token"),
        user_id: this.$route.query.id,
        type: val,
        usdt_num: this.input,
        remark: this.inputRemark
      };
      this.$post("/api/user/usdtChange", data).then(res => {
        if (res.data.code === 0) {
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.addList();
        } else {
          this.$message.error("添加失败");
        }
      });
    },
    handleInput(e) {
      this.input = this.input.replace(/[^\d]/g, "");
      this.input = this.input.replace(".", "");
      this.input = parseInt(this.input) || "";
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  // height: 1271px;// 1871px;
  padding: 0 7px;
  background-color: #fff;
  .section1 {
    height: 633px; // 733px;
    width: 100%;
    border-bottom: 1px solid #cbcfdc;
    box-sizing: border-box;
    .el-button--warning {
      width: 60px;
      height: 28px;
      font-size: 12px;
      padding: 0;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 2px;
      background-color: #fdb44d;
    }
    .content {
      height: 21px;
      margin-top: 10px;
      .title {
        display: inline-block;
        height: 21px;
        width: 120px; //78px;
        color: #979dac;
        font-size: 14px;
        line-height: 21px;
        text-align: right;
      }
      .username {
        font-size: 14px;
        color: #253444;
        margin-left: 20px;
      }
    }
    #status {
      .username {
        display: inline-block;
        width: 169px;
        height: 20px;
        text-align: left;
        color: #e82b2b;
      }
      .el-button--primary {
        width: 68px;
        height: 24px;
        padding: 0;
        border-radius: 2px;
      }
    }
    .my-table {
      margin-top: 13px;
    }
    .box {
      height: 180px;
      width: 100%;
      .recommend {
        float: left;
        width: 180px;
        height: 120px;
        background-color: #419eff;
        padding: 20px 0 0 36px;
        box-sizing: border-box;
        margin-right: 20px;
        margin-bottom: 20px;
        .person {
          width: 100px;
          height: 20px;
          font-size: 14px;
          line-height: 20px;
          color: #fff;
          position: relative;
          padding-left: 7px;
        }
        .person:before {
          content: "";
          display: inline-block;
          width: 4px;
          height: 15px;
          line-height: 20px;
          background-color: #fff;
          position: absolute;
          left: 0;
          top: 3px;
        }
        .number {
          width: 120px;
          height: 37px;
          font-size: 32px;
          line-height: 37px;
          margin-top: 20px;
          color: #fff;
        }
      }
    }
  }
  .section2 {
    padding: 24px 0;
    height: 348px;
    width: 100%;
    border-bottom: 1px solid #cbcfdc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .my-table {
      margin-top: 24px;
    }
    .btn {
      .el-button--primary {
        width: 80px;
        height: 32px;
        padding: 0;
        font-size: 12px;
        color: #fff;
        margin-right: 20px;
      }
      .el-button--default {
        width: 152px;
        height: 32px;
        padding: 0;
        font-size: 12px;
        color: #979dac;
        margin-left: 0;
      }
    }
    .text {
      color: #979dac;
      font-size: 12px;
      letter-spacing: 1px;
      line-height: 17px;
      margin-top: 10px;
    }
  }
  .section3 {
    height: 374px;
    width: 100%;
    padding-top: 21px;
    .title {
      width: 169px;
      height: 25px;
      color: #979dac;
      font-size: 18px;
    }
    .input {
      margin: 15px 0 10px 0;
      span {
        color: #979dac;
        font-size: 12px;
        margin-left: 19px;
      }
      .circle {
        transform: translateY(2px);
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #979797;
      }
      .email {
        margin-left: 4px;
      }
    }
    .btn {
      margin: 20px 0 24px 0;
      .el-button--primary,
      .el-button--danger {
        width: 80px;
        height: 32px;
        padding: 0;
      }
    }
  }
  .section4 {
    height: 71px;
    width: 100%;
    padding-top: 21px;
    .title {
      width: 133px;
      height: 25px;
      color: #979dac;
      font-size: 18px;
    }
    .input {
      margin: 15px 0 10px 0;
      span {
        color: #979dac;
        font-size: 12px;
        margin-left: 19px;
      }
      .circle {
        transform: translateY(2px);
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid #979797;
      }
      .email {
        margin-left: 4px;
      }
    }
    .btn {
      margin: 20px 0 24px 0;
      .el-button--primary {
        width: 80px;
        height: 32px;
        padding: 0;
      }
    }
  }
}
</style>
