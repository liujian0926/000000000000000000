<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="my-tab">
      <el-tab-pane label="已完成" name="first">
        <!-- 表单 -->
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="接单时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date2"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <!--类型选择 -->
          <el-form-item>
            <el-input v-model="form.input1" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.input2" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.input3" placeholder="请输入内容"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit(form)">查询</el-button>
          </el-form-item>
        </el-form>

        <!-- 表格-->
        <el-table
          class="table"
          :data="tableData"
          border
          style="width: 100% ;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="name" label="用户名称" align="center"></el-table-column>
          <el-table-column prop="uid" label="用户ID" align="center"></el-table-column>
          <el-table-column prop="order_no" label="买入单号" align="center"></el-table-column>
          <el-table-column prop="seller_status" label="订单状态" align="center"></el-table-column>
          <el-table-column prop="order_amount" label="买入积分" align="center"></el-table-column>
          <el-table-column prop="pay_type" label="支付方式" align="center"></el-table-column>
          <el-table-column prop="reward_amount" label=" 团队奖励 " align="center"></el-table-column>
          <el-table-column prop="add_time" label=" 接单时间 " align="center"></el-table-column>
          <el-table-column prop="update_time" label=" 完成时间 " align="center"></el-table-column>
        </el-table>

        <!--分页 -->
        <div class="page">
          <div class="pagination">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[15]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已取消" name="second">
        <!-- 表单 -->
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="接单时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <!--类型选择 -->
          <el-form-item>
            <el-input v-model="form.input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.input" placeholder="请输入内容"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>

        <!-- 表格-->
        <el-table
          class="table"
          :data="tableData2"
          border
          style="width: 100% ;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="name" label="用户名称" align="center"></el-table-column>
          <el-table-column prop="uid" label="用户ID" align="center"></el-table-column>
          <el-table-column prop="order_no" label="买入单号" align="center"></el-table-column>
          <el-table-column prop="seller_status" label="订单状态" align="center"></el-table-column>
          <el-table-column prop="order_amount" label="买入积分" align="center"></el-table-column>
          <el-table-column prop="pay_type" label="支付方式" align="center"></el-table-column>
          <el-table-column prop="reward_amount" label=" 团队奖励 " align="center"></el-table-column>
          <el-table-column prop="add_time" label=" 接单时间 " align="center"></el-table-column>
          <el-table-column prop="update_time" label=" 完成时间 " align="center"></el-table-column>
        </el-table>

        <!--分页 -->
        <div class="page">
          <div class="pagination">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[15]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total2"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",

      tableData: [],
      tableData2: [],
      // 页码
      pagenum: 1,
      // 页容量
      pagesize: 15,
      // 总数量
      total: 0,
      total2: 0,
      form: {
        date1: "",
        date2: "",
        input: "",
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },

  mounted() {
    this.getList();
    this.getList2();
  },
  methods: {
    handleClick() {},
    onSubmit(value) {
      console.log(value);
      console.log(value.date1);
      console.log(value.date2);
      console.log(value.input1);
      console.log(value.input2);
      console.log(value.input3);
    },

    handleCurrentChange(current) {
      this.pagenum = current;
      this.getList();
    },
    // 已完成
    getList() {
      const data = {
        page: this.pagenum,
        size: this.pagesize,
        token: localStorage.getItem("token")
      };
      this.$post("api/order/rechargeOrderList", data).then(res => {
        this.tableData = res.data.data.data;
        console.log(this.tableData);

        this.total = res.data.data.total;
      });
    },

    // 已取消
    getList2() {
      const data = {
        page: this.pagenum,
        size: this.pagesize,
        token: localStorage.getItem("token"),
        status: 2
      };

      this.$post("api/order/rechargeOrderList", data).then(res => {
        this.tableData2 = res.data.data.data;

        this.total2 = res.data.data.total;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 696px;
  background-color: #fff;
  color: #333;
  a {
    text-decoration: none;
  }
  .el-button--warning {
    width: 60px;
    height: 28px;
    padding: 0;
    border-radius: 2px;
  }
  .my-form-users {
    height: 75px;
    display: flex;
    align-items: center;
    .el-form-item {
      margin-right: 18px;
    }
    .title {
      font-size: 13px;
      color: #253444;
      margin-right: 8px;
    }
    .el-button--primary {
      width: 100px !important;
      height: 28px;
      padding: 0;
      margin-left: 42px;
    }
  }

  .page {
    height: 78px;
    display: flex;
    flex-direction: row-reverse;
    padding-right: 4px;
    .pagination {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>

