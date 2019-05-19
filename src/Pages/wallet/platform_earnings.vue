<template>
  <div class="container">
    <el-form :inline="true" class="demo-form-inline my-form-users">
      <!--时间日期-->
      <!-- <div class="title">日期</div> -->
      <el-form-item label="日期">
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="form.date1"  type="datetime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2"></el-input>
      </el-form-item>
      <!--类型选择 -->
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
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
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
      <el-table-column prop="num" label="交易单号" align="center"></el-table-column>
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
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
        },
        {
          date: "2016-05-02",
          zd: "项目方",
          id: "28773",
          type: "USDT兑换积分",
          usdt: "+100",
          num: "3455645756"
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
  height: 700px;
  background-color: #f5f6fa;
  color: #333;
  padding: 0 30px;
   box-sizing: border-box;
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
    }
    .el-button--default {
      margin-left: 46px;
      width: 50px !important;
      height: 28px;
      padding: 0;
    }
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

