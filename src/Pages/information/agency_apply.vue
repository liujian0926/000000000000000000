<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="my-tab-big">
      <el-tab-pane label="未缴纳保证金" name="first">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="申请时间">
           <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
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
              <router-link :to="{path:'/agency_apply_detail'}">
                <span style="color:blue">{{ scope.row.status }}</span>
              </router-link>
            </template>
          </el-table-column>

          <el-table-column prop="pass,reject" label="操作" align="center">
            <template scope="scope">
              <router-link :to="{path:'/hand_pass'}">
                <span style="color:#20d179">{{ scope.row.pass }}</span>
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
      </el-tab-pane>

      <el-tab-pane label="缴纳保证金自动通过" name="second">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="申请时间">
           <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
           <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
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
      </el-tab-pane>
      <el-tab-pane label="未缴纳保证金手动通过" name="third">
        <el-form :inline="true" class="demo-form-inline my-form-users">
          <el-form-item label="申请时间">
            <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
           <el-date-picker type="date" placeholder="选择日期"  v-model="form.date1" style="width: 100%;"></el-date-picker>
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
          style="font-size: 14px"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          align="center"
          row-style="height:40px"
          cell-style="padding:0"
        >
          <el-table-column prop="username" label="代理类型" align="center"></el-table-column>
          <el-table-column prop="user_id" label="代理名称" align="center"></el-table-column>
          <el-table-column prop="tel" label="代理ID" align="center"></el-table-column>
          <el-table-column prop="time" label="联系人" align="center"></el-table-column>
          <el-table-column prop="pro_name" label="电话" align="center"></el-table-column>
          <el-table-column prop="pro_id" label="邮箱" align="center"></el-table-column>
          <el-table-column prop="dl_name" label="已缴纳代理费" align="center"></el-table-column>
          <el-table-column prop="dl_id" label="申请时间" align="center"></el-table-column>
          <el-table-column prop="real_name" label="代理信息" align="center">
            <template scope="scope">
              <span style="color:blue">{{ scope.row.status }}</span>
            </template>
          </el-table-column>

          <el-table-column prop="status" label="状态" align="center"></el-table-column>
          <el-table-column prop="real_name" label="审核人" align="center"></el-table-column>
          <el-table-column prop="pass,reject" label="操作" align="center">
            <template scope="scope">
              <router-link :to="{path:'/withdraw'}">
                <span style="color:#20d179">{{ scope.row.reject }}</span>
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
        },
        {
          pass: "通过",
          reject: "拒绝",
          username: "xxxxx",
          user_id: "1222",
          tel: "1887656799",
          time: "2019-12-04 12:30",
          pro_name: "xxx",
          pro_id: "3333",
          dl_name: "ffff",
          dl_id: "666",
          real_name: "是",
          status: "查看",
          operation: "详情"
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
