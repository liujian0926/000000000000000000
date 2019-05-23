<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline my-form-users">
      <el-form-item label="角色">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <router-link :to="{path:'/member_add'}">
          <el-button type="primary">添加成员</el-button>
        </router-link>
      </el-form-item>
    </el-form>
    <!-- 表格-->
    <el-table
      :data="tableData"
      border
      style="width: 100% ;"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    >
      <el-table-column prop="date" label="日期" align="center"></el-table-column>
      <el-table-column prop="zd" label="终端类型" align="center"></el-table-column>
      <el-table-column prop="id" label="ID" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="usdt" label="USDT" align="center"></el-table-column>
      <el-table-column prop="num,usdt" label="操作" align="center">
        <template scope="scope">
          <span style="color:red">{{ scope.row.num }}</span>
          <router-link :to="{path:'/role_detail'}">
            <span style="color:#419EFF;marginLeft:20px;">{{ scope.row.usdt }}</span>
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
          :current-page="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="100"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "管理",
          num: "删除"
        }
      ],
      form: {
        data1: "",
        data2: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: #f5f6fa;
  color: #333;
  padding: 0 30px;
  box-sizing: border-box;
  .my-form-users {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    }
  }
  a {
    text-decoration: none;
  }
  .page {
    height: 104px;
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

