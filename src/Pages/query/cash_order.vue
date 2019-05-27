<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="my-tab">
      <el-tab-pane label="已完成" name="first">
        <!-- 表单 -->
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="下单时间">
            <el-date-picker type="date" placeholder="选择日期"  v-model="startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期"  v-model="endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!--类型选择 -->
           <el-form-item>
            <el-input v-model="orderno" placeholder="提现单号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="userID" placeholder="用户ID"></el-input>
          </el-form-item>
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
          <el-form-item v-if="0">
            <el-input v-model="uniID" placeholder="代理ID"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getList(1)">查询</el-button>
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
          <el-table-column prop="name" label="用户名" align="center"></el-table-column>
          <el-table-column prop="uid" label="用户ID" align="center"></el-table-column>
          <el-table-column prop="order_no" label="提现单号" align="center"></el-table-column>
          <el-table-column prop="order_amount" label="提现积分" align="center"></el-table-column>
          <!-- <el-table-column prop="order_amount" label="提现金额" align="center"></el-table-column> -->
          <el-table-column prop="rate" label="费率" align="center"></el-table-column>
          <!-- <el-table-column prop="rate_type" label="扣手续费方式" align="center"></el-table-column> -->
          <el-table-column prop="pay_amount" label="实际到帐" align="center"></el-table-column>
          <el-table-column prop="pay_type" label="收款方式" align="center"></el-table-column>
          <el-table-column prop="seller_status" label="状态" align="center"></el-table-column>
          <!-- <el-table-column prop="reward_amount" label="代理奖励" align="center"></el-table-column> -->
          <el-table-column prop="add_time" label="下单时间" align="center"></el-table-column>
          <el-table-column prop="update_time" label="完成时间" align="center"></el-table-column>
          <!-- <el-table-column prop="operation" label="操作" align="center">
            <template scope="scope">
              <router-link :to="{path:'/cash_detail'}">
                <span style="color:#419EFF">{{ scope.row.operation }}</span>
              </router-link>
            </template>
          </el-table-column> -->
        </el-table>

        <!--分页 -->
        <div class="page">
          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[15]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane  label="已取消" name="second">
        <!-- 表单 -->
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="下单时间">
            <el-date-picker type="date" placeholder="选择日期"  v-model="startTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期"  v-model="endTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!--类型选择 -->
          <el-form-item>
            <el-input v-model="orderno" placeholder="提现单号"></el-input>
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

        <!-- 表格-->
        <el-table
          class="table"
          :data="tableData"
          border
          style="width: 100% ;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="username" label="用户名" align="center"></el-table-column>
          <el-table-column prop="user_id" label="用户ID" align="center"></el-table-column>
          <el-table-column prop="tel" label="电话" align="center"></el-table-column>
          <el-table-column prop="time" label="加入时间" align="center"></el-table-column>
          <el-table-column prop="pro_name" label="项目方名称" align="center"></el-table-column>
          <el-table-column prop="pro_id" label="项目方ID" align="center"></el-table-column>
          <el-table-column prop="dl_name" label="代理名称" align="center"></el-table-column>
          <el-table-column prop="dl_id" label="代理ID" align="center"></el-table-column>
          <el-table-column prop="real_name" label="是否实名" align="center"></el-table-column>
          <el-table-column prop="status" label="账户状态" align="center"></el-table-column>
          <el-table-column prop="operation" label="操作" align="center">
            <template scope="scope">
              <router-link :to="{path:'/cash_cancel'}">
                <span style="color:#419EFF">{{ scope.row.operation }}</span>
              </router-link>
            </template>
          </el-table-column>
        </el-table>

        <!--分页 -->
        <div class="page">
          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[15]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
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
      startTime: '',
      endTime: '',
      // 页码
      pagenum: 1,
      // 页容量
      pagesize: 15,
      // 总数量
      total: 0,
      uniID: '',
      userID: '',
      orderno: '',
      status: '',
      options: [
        {
          value: "1",
          label: "已提交"
        },
        {
          value: "6",
          label: "已匹配"
        },
        {
          value: "7",
          label: "待确认"
        },
        {
          value: "5",
          label: "已完成"
        },
        {
          value: "4",
          label: "手动取消"
        },
        {
          value: "8",
          label: "自动取消"
        }
      ],
      selectedOptions: [],
    };
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleSizeChange() {},
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(value) {
      this.status = value[0]
    },
    handleClick(tab, event) {
      this.uniID = ''
      this.userID = ''
      this.orderno = ''
      this.startTime = ''
      this.endTime = ''
      if (tab.index == 0) {}
    },
    handleCurrentChange(current) {
      this.pagenum = current;
      this.getList(current);
    },
    getList(pagenum,idx) {
     var startT = this.startTime
     var endT = this.endTime
     if (this.startTime) {
       startT=this.startTime.getFullYear() + '-' + (this.startTime.getMonth() + 1) + '-' + this.startTime.getDate();
     }
     if (this.endTime) {
       endT=this.endTime.getFullYear() + '-' + (this.endTime.getMonth() + 1) + '-' + this.endTime.getDate(); 
     }
     const data = {
       page: pagenum,
       size: this.pagesize,
       start: startT,
       end: endT,
       order_no: this.orderno,
       user_id: this.userID,
       status: this.status,
       token: localStorage.getItem("token")
     }
     this.$post("api/order/withdrawOrderList", data).then(res => {
       this.tableData = res.data.data.data;
       this.total = res.data.data.count
       this.selectedOptions = []
     });
    },
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

