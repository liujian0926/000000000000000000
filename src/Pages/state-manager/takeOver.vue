<template>
  <div class="container">
    <div class="section1">
      <el-button type="warning">返回</el-button>
      <el-button type="primary" class="btn">接管处理</el-button>
      <div class="content">
        <span class="title">申诉单号:</span>
        <span class="username">HANK</span>
      </div>
      <div class="content">
        <span class="title">发起日期:</span>
        <span class="username">2019-02-14 19:22</span>
      </div>
      <div class="content">
        <span class="title">申诉类型:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">客户名称:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">用户类型:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">保证金:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">实名认证:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">发起申诉次数:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">被起诉次数:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">客户电话:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">客户ID:</span>
        <span class="username">2345456</span>
      </div>
      <div class="content">
        <span class="title">申诉内容:</span>
        <span class="username">2345456</span>
      </div>
      <div class="table">
        <el-table data="tableData" border style="width:279px">
          <el-table-column prop="date" label="订单状态"></el-table-column>
          <el-table-column prop="name" label="待确认"></el-table-column>
        </el-table>
      </div>
      <div class="status">
        <span>当前订单状态:</span>
        <span>待确认</span>
      </div>
      <div class="megs">被起诉对象信息:</div>
      <div class="table">
        <el-table data="tableData" border style="width:279px">
          <el-table-column prop="date" label="用户名"></el-table-column>
          <el-table-column prop="name" label="wink"></el-table-column>
        </el-table>
      </div>
      <el-button type="primary">接管处理</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "某楼盘销售情况",
          subtext: "纯属虚构"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["意向", "预购", "成交"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "成交",
            type: "line",
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [10, 12, 21, 54, 260, 830, 710]
          },
          {
            name: "预购",
            type: "line",
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [30, 182, 434, 791, 390, 30, 10]
          },
          {
            name: "意向",
            type: "line",
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [1320, 1132, 601, 234, 120, 90, 20]
          }
        ]
      },

      form: {
        data1: "",
        data2: ""
      },
      activeName: "first",
      radio: "1",
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
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById("chart1"));
    // var myChart2 = echarts.init(document.getElementById("chart2"));
    // var myChart3 = echarts.init(document.getElementById("chart3"));
    myChart1.setOption(this.option);
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 1039px;
  background-color: #fff;
  .section1 {
    height: 100%;
    width: 100%;
    padding: 26px 30px 0 30px;
    border-bottom: 1px solid #cbcfdc;
    box-sizing: border-box;
    .el-button--warning {
      width: 60px;
      height: 28px;
      font-size: 12px;
      padding: 0;
      margin-bottom: 10px;
      border-radius: 2px;
      background-color: #fdb44d;
    }
    .el-button--primary {
      width: 80px;
      height: 32px;
      font-size: 12px;
      padding: 0;
      margin-top: 20px;
      border-radius: 2px;
    }
    .btn {
      width: 80px;
      height: 28px;
      font-size: 12px;
      padding: 0;
      margin-top: 0px;
      border-radius: 2px;
      margin-left: 20px;
    }
    .content {
      height: 21px;
      margin-top: 13px;
      .title {
        display: inline-block;
        height: 21px;
        width: 88px;
        color: #979dac;
        font-size: 14px;
        line-height: 21px;
        text-align: right;
        margin-right: 30px;
      }
      span {
        color: #253444;
        font-size: 14px;
      }
      input {
        height: 20px;
        width: 280px;
      }
    }
    .table {
      margin-top: 10px;
    }
    .status {
      height: 40px;
      width: 100%;
      background-color: #fef0f3;
      border-left: 4px solid #fd4859;
      padding-left: 26px;
      box-sizing: border-box;
      margin-top: 20px;
      span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        color: #fd4859;
        font-size: 14px;
        margin-right: 20px;
      }
      span:nth-of-type(2) {
        font-weight: bold;
      }
    }
    .megs{
        height: 21px;
        width: 100%;
        line-height: 21px;
        margin-top: 20px;
        font-size: 14px;
        color: #979DAC;
    }
  }
}
</style>
