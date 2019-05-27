<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="my-tab">
      <el-tab-pane label="已完成" name="first">
        <!-- 表单 -->
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!--类型选择 -->
          <el-form-item>
            <el-input v-model="orderno" placeholder="买入单号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userID" placeholder="用户ID"></el-input>
          </el-form-item>
          <el-form-item v-if="0">
            <el-input v-model="uniID" placeholder="代理ID"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="getList(1,1)">查询</el-button>
          </el-form-item>
        </el-form>

        <!-- 完成表格-->
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
          <el-table-column prop="add_time" label=" 接单时间 " align="center"></el-table-column>
          <el-table-column prop="update_time" label=" 完成时间 " align="center"></el-table-column>
          <el-table-column prop="详情" label="操作" align="center">
            <template scope="">
              <span style="color:#419EFF">详情</span>
            </template>
          </el-table-column>
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
          <el-form-item label="日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期" v-model="endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!--类型选择 -->
          <el-form-item>
            <el-input v-model="orderno" placeholder="买入单号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userID" placeholder="用户ID"></el-input>
          </el-form-item>
          <el-form-item v-if="0">
            <el-input v-model="uniID" placeholder="代理ID"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="getList(1,2)">查询</el-button>
          </el-form-item>
        </el-form>

        <!-- 取消表格-->
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
          <el-table-column prop="add_time" label=" 接单时间 " align="center"></el-table-column>
          <el-table-column prop="update_time" label=" 完成时间 " align="center"></el-table-column>
          <el-table-column prop="详情" label="操作" align="center">
            <template scope="">
              <router-link to>
                <span style="color:#419EFF" >详情</span>
              </router-link>
            </template>
          </el-table-column>
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
      input: "",
      tableData: [],
      tableData2: [],
      // 页码
      pagenum: 1,
      // 页容量
      pagesize: 15,
      // 总数量
      total: 0,
      total2: 0,
      uniID: "",
      userID: "",
      orderno: "",
      startTime: "",
      endTime: ""
    };
  },

  mounted() {
    this.getList();
    this.getList2();
  },
  methods: {
    handleClick(tab, event) {
      this.uniID = "";
      this.userID = "";
      this.orderno = "";
      this.startTime = "";
      this.endTime = "";
      if (tab.index == 0) {
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleCurrentChange(current) {
      this.pagenum = current;
      this.getList(current);
    },
    // 已完成
    getList(pagenum, idx) {
      var startT = this.startTime;
      var endT = this.endTime;
      if (this.startTime) {
        startT =
          this.startTime.getFullYear() +
          "-" +
          (this.startTime.getMonth() + 1) +
          "-" +
          this.startTime.getDate();
      }
      if (this.endTime) {
        endT =
          this.endTime.getFullYear() +
          "-" +
          (this.endTime.getMonth() + 1) +
          "-" +
          this.endTime.getDate();
      }
      const data = {
        page: pagenum,
        size: this.pagesize,
        start: startT,
        end: endT,
        order_no: this.orderno,
        user_id: this.userID,
        status: idx,
        token: localStorage.getItem("token")
      };
      this.$post("api/order/purchaseOrderList", data).then(res => {
        this.tableData = res.data.data.data;
        this.total = res.data.data.count;
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

      this.$post("api/order/purchaseOrderList", data).then(res => {
        this.tableData2 = res.data.data.data;

        this.total2 = res.data.data.count;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 800px;
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

