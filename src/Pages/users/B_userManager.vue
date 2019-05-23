<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline my-form-users">
      <!--时间日期-->
      <!-- <div class="title">日期</div> -->
      <el-form-item label="日期">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <!--类型选择 -->
      <el-form-item>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
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
      <el-table-column prop="id" label="用户编号" align="center"></el-table-column>
      <el-table-column prop="mobile" label="点话" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
      <el-table-column prop="add_time" label="注册时间" align="center"></el-table-column>

      <el-table-column prop="pid" label="推荐人ID" align="center"></el-table-column>
      <el-table-column prop="deposit" label="保证金" align="center"></el-table-column>
      <el-table-column prop="status_text" label="审核状态" align="center"></el-table-column>
      <el-table-column prop="grant_status_text" label="会员状态" align="center"></el-table-column>
      <el-table-column prop="grant_text" label="会员等级" align="center"></el-table-column>
      <el-table-column prop="pid_name" label="推荐人" align="center"></el-table-column>
      <el-table-column prop="child_num" label="直推人数" align="center"></el-table-column>
      <el-table-column prop="child_three_num" label="三级人数" align="center"></el-table-column>
      <!--      
      <el-table-column prop="" label="操作" align="center">
        <template scope="scope">
          <router-link :to="{path:'/B_detail'}">
            <span style="color:#419EFF">{{ scope.row.operation }}</span>
          </router-link>
        </template>
      </el-table-column>-->
    </el-table>

    <!--分页 -->
    <div class="page">
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="15"
          :page-size="15"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [],
      // 页码
      pagenum: 1,
      // 页容量
      pagesize: 15,
      // 总数量
      total: 0,
      form: {
        data1: "",
        data2: ""
      }
    };
  },
  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    
    handleCurrentChange(current) {
      console.log(222);
      
      this.pagenum = current;
      this.getList();
    },
    getList() {
      const data =  {
        page: this.pagenum,
        limit: this.pagesize,
        token: localStorage.getItem("token")
      }
      this.$post("api/user/bList", data)
        .then(res => {
          console.log('post: ')
          console.log(res.data.data.current_page);
          this.tableData = res.data.data.data;
          this.total = res.data.data.total;
        });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #fff;
  color: #333;
  a {
    text-decoration: none;
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

