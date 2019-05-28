<template>
  <div class="container">
    <el-tabs v-model="activeName" class="my-tab">
      <el-tab-pane label="未审核" name="first">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="申请时间">
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
          :data="unreviewed.tableData1"
          border
          style="width: 100% ;"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="user_id" label="用户ID" align="center"></el-table-column>
          <el-table-column prop="name" label="用户名称" align="center"></el-table-column>
          <el-table-column prop="mobile" label="用户手机号" align="center"></el-table-column>
          <el-table-column prop="add_time" label="申请时间" align="center"></el-table-column>
          <el-table-column prop="merchant_code" label="项目方ID" align="center"></el-table-column>
          <el-table-column prop="merchant_name" label="项目方名称" align="center"></el-table-column>

          <el-table-column prop="status" label="实名信息" align="center">
            <template scope="scope">
              <router-link :to="{path:'/A_unreviewed'}">
                <span style="color:blue">{{ scope.row.status }}</span>
              </router-link>
            </template>
          </el-table-column>

          <el-table-column prop="pass,reject" label="操作" align="center">
            <template scope="scope">
              <span style="color:#20d179">{{ scope.row.pass }}</span>
              <span style="color:red; marginLeft:20px ;">{{ scope.row.reject }}</span>
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
              :page-sizes="[10, 20, 30, 40]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="已拒绝" name="second">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="申请时间">
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
        <!-- <el-table
          class="table"
          :data="unreviewed.tableData1"
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

          <el-table-column prop="status" label="实名信息" align="center">
            <template scope="scope">
              <router-link :to="{path:'/A_reject'}">
                <span style="color:blue">{{ scope.row.status }}</span>
              </router-link>
            </template>
          </el-table-column>

          <el-table-column prop="pass,reject" label="操作" align="center">
            <template scope="scope">
              <span style="color:#20d179">{{ scope.row.pass }}</span>
              <span style="color:red; marginLeft:20px ;">{{ scope.row.reject }}</span>
            </template>
          </el-table-column>
        </el-table>-->
        <!--分页 -->
        <div class="page">
          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100"
            ></el-pagination>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="third">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="申请时间">
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
        <!-- <el-table
          class="table"
          :data="unreviewed.tableData1"
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

          <el-table-column prop="status" label="实名信息" align="center">
            <template scope="scope">
              <router-link :to="{path:'/A_pass'}">
                <span style="color:blue">{{ scope.row.status }}</span>
              </router-link>
            </template>
          </el-table-column>

          <el-table-column prop="pass,reject" label="操作" align="center">
            <template scope="scope">
              <span style="color:#20d179">{{ scope.row.pass }}</span>
              <span style="color:red; marginLeft:20px ;">{{ scope.row.reject }}</span>
            </template>
          </el-table-column>
        </el-table>-->
        <!--分页 -->
        <div class="page">
          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100"
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
      total1: "",
      //未审核
      unreviewed: {
        tableData1: "",
        page: 1,
        limit: 15
      },
      // 已拒绝
      rejected: {},

      form: {
        data1: "",
        data2: ""
      }
    };
  },
  mounted() {
    this.getNnreviewed();
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    getNnreviewed() {
      let data = {
        page: this.unreviewed.page,
        limit: this.unreviewed.limit,
        token: localStorage.getItem("token"),
        status: 0
      };
      this.$post("/api/user/auserAuthList", data).then(res => {
        this.unreviewed.tableData1 = res.data.data.data;
        this.total1 = res.data.data.total;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #f5f6fa;
  padding: 0 30px;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  .my-form-users {
    height: 66px;
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
      margin-left: 24px;
    }
  }

  .page {
    height: 72px;
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
