<template>
  <div class="container">
    <div class="section1">
      <el-button type="warning">返回</el-button>
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="my-tab">
          <el-tab-pane label="基本信息" name="first">
            <div style="height:439px;borderBottom:1px solid #ccc;">
              <div class="content">
                <span class="title">ID</span>
                <span class="username">HANK</span>
              </div>
              <div class="content">
                <span class="title">账 号:</span>
                <span class="username">2345456</span>
              </div>
              <div class="content">
                <span class="title">类型:</span>
                <span class="username">2345456</span>
              </div>
              <div class="content">
                <span class="title">代理费:</span>
                <span class="username">2345456</span>
              </div>
              <div class="content">
                <span class="title">邮 箱:</span>
                <input type="text">
              </div>
              <div class="content">
                <span class="title">代理名称:</span>
                <input type="text">
              </div>
              <div class="content_brief">
                <span class="title">代理简介:</span>
                <!-- <input type="text" class="brief"> -->
                <textarea name id cols="30" rows="10" class="brief"></textarea>
              </div>
              <div class="content">
                <span class="title">官方链接:</span>
                <input type="text">
              </div>
              <div class="content">
                <span class="title">联系人:</span>
                <input type="text">
              </div>
              <div class="content">
                <span class="title">联系电话:</span>
                <input type="text">
              </div>
              <div class="content">
                <span class="title">微信账号:</span>
                <input type="text">
              </div>
              <el-button type="primary">保存修改</el-button>
            </div>
            <div class="section2">
              <div class="content1">
                <span>每笔交易可获得收益百分比</span>
              </div>
              <div class="content2">
                <span>代理收益百分比</span>
                <input type="text">
                <span>%</span>
              </div>

              <el-button type="primary">保存修改</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane label="数据分析" name="second">
            <div class="box">
              <span>平台持有USDT</span>
              <div>18,035,20</div>
            </div>
            <div class="box">
              <span>平台持有USDT</span>
              <div>18,035,20</div>
            </div>
            <div class="box">
              <span>平台持有USDT</span>
              <div>18,035,20</div>
            </div>
            <div class="box">
              <span>平台持有USDT</span>
              <div>18,035,20</div>
            </div>
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
          </el-tab-pane>
        </el-tabs>
      </template>
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
  height: 1616px;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: #f5f6fa;
  .section1 {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    .el-button--warning {
      width: 60px;
      height: 28px;
      font-size: 12px;
      padding: 0;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 2px;
      background-color: #fdb44d;
    }
    .el-button--primary {
      width: 80px;
      height: 32px;
      font-size: 12px;
      padding: 0;
      margin-top: 28px;
      border-radius: 2px;
    }
    .content {
      height: 21px;
      margin-top: 10px;
      .title {
        display: inline-block;
        height: 21px;
        width: 78px;
        color: #979dac;
        font-size: 14px;
        line-height: 21px;
        text-align: right;
        margin-right: 19px;
      }
      input {
        width: 280px;
      }
    }

    .content_brief {
      height: 56px;
      margin-top: 8px;
      .title {
        display: inline-block;
        height: 21px;
        width: 78px;
        color: #979dac;
        font-size: 14px;
        text-align: right;
        margin-right: 19px;
        transform: translateY(-50px);
      }
      .brief {
        outline: none;
        height: 56px;
        width: 280px;
      }
    }
    .section2 {
      .content1,
      .content3 {
        height: 22px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 30px;
        span {
          margin-right: 32px;
          font-size: 14px;
          color: #979dac;
        }
      }
      .content2,
      .content4 {
        span {
          color: #979dac;
          font-size: 14px;
          height: 28px;
          line-height: 28px;
          margin-right: 14px;
        }
        input {
          width: 73px;
          margin-right: 8px;
        }
      }
      .content2,
      .content4 {
        margin-top: 14px;
      }
      .content3 {
        margin-top: 18px;
      }
    }

    .box {
      width: 276px;
      height: 120px;
      float: left;
      background-color: #419eff;
      padding: 30px 0 0 40px;
      box-sizing: border-box;
      margin-right: 22px;
      margin-bottom: 20px;
      span {
        display: block;
        height: 20px;
        width: 100px;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        margin-left: 5px;
        position: relative;
      }
      span::before {
        position: absolute;
        top: 3px;
        left: -9px;
        content: "";
        display: block;
        width: 4px;
        height: 15px;
        background-color: #ffffff;
      }
      div {
        height: 37px;
        font-size: 32px;
        line-height: 37px;
        color: #ffffff;
        margin-top: 20px;
        font-weight: bold;
      }
    }
    .page {
      height: 81px;
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
}
</style>
