<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline my-form-users">
      <el-form-item>
        <el-button type="warning">返回</el-button>
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
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item>
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
      <el-table-column prop="operation,check" label="操作" align="center">
        <template scope="scope">
          <router-link :to="{path:'/processing_detail'}">
            <span style="color:#419EFF;marginLeft:10px;">{{ scope.row.check }}</span>
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
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
        },
        {
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "正常",
          operation: "接管处理",
          check: "查看"
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
  padding: 0 30px;
  box-sizing: border-box;
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
    .el-button--warning {
      width: 60px;
      height: 28px;
      padding: 0;
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

