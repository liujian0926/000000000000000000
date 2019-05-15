<template>
  <div class="container">
    <div class="title-box">
      <div class="title" v-for="(item,index) in dataList" :key="index">
        <div>本周总利润</div>
        <div>38,035,20</div>
      </div>
    </div>
    <div class="charts-box">
      <!-- 图表 -->
      <div class="echart" id="echart1"></div>
      <div class="echart" id="echart2"></div>
      <div class="echart" id="echart3"></div>
      <div class="echart" id="echart4"></div>
      <div class="echart" id="echart5"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dataList: [1, 2, 3, 4, 5, 6, 7, 8],
      option1: {
        color: [
          "#2ec7c9",
          "#b6a2de"
          // "#5ab1ef",
          // "#ffb980",
          // "#d87a80",
          // "#8d98b3",
          // "#e5cf0d",
          // "#97b552",
          // "#95706d",
          // "#dc69aa",
          // "#07a2a4",
          // "#9a7fd1",
          // "#588dd5",
          // "#f5994e",
          // "#c05050",
          // "#59678c",
          // "#c9ab00",
          // "#7eb00a",
          // "#6f5553",
          // "#c14089"
        ],
        title: {
          text: "项目方买卖金额排行"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["买入", "卖出"]
        },
        toolbox: {
          show: true,
          feature: {
            dateView: { show: true }
            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ["line", "bar"] },
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "买入",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "卖出",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ],
            markPoint: {
              data: [
                {
                  name: "年最高",
                  value: 182.2,
                  xAxis: 7,
                  yAxis: 183,
                  symbolSize: 18
                },
                { name: "年最低", value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      },
      option2: {
        color: ["#2ec7c9", "#b6a2de"],
        title: {
          text: "项目方买卖金额排行"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["买入", "卖出"]
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
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
            name: "买入",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "卖出",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      },
      option3: {
        color: [
          "#95706d",
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089"
        ],
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
          show: true
          // feature: {
          //   mark: { show: true },
          //   dataView: { show: true, readOnly: false },
          //   magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
          //   restore: { show: true },
          //   saveAsImage: { show: true }
          // }
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
            name: "预购",
            type: "line",
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [30, 182, 434, 791, 390, 30, 10]
          }
        ]
      }
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById("echart1"));
    var myChart2 = echarts.init(document.getElementById("echart2"));
    var myChart3 = echarts.init(document.getElementById("echart3"));
    var myChart4 = echarts.init(document.getElementById("echart4"));
    var myChart5 = echarts.init(document.getElementById("echart5"));
    // console.log(myChart);
    // 设置图想置顶  this.option.xAxis.boundaryGap 留白项 默认为true
    // this.option.xAxis[0].boundaryGap = false;
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(this.option1);
    myChart2.setOption(this.option2);
    myChart3.setOption(this.option2);
    myChart4.setOption(this.option2);
    myChart5.setOption(this.option3);
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 1697px;
  padding: 24px;
  box-sizing: border-box;
  background-color: #f5f6fa; 
  .title-box {
    overflow: hidden;
     .title {
    width: 276px;
    height: 128px;
    float: left;
    background-color: #fff;
    padding: 27px 0 0 40px;
    box-sizing: border-box;
    margin-right: 26px;
    margin-bottom: 26px;
    // &:nth-child(4n){
    //     margin-right: 0;
    // }
    div {
      &:nth-child(1) {
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        color: #666666;
        font-weight: bold;
      }
      &:nth-child(2) {
        margin-top: 1px;
        height: 40px;
        font-size: 32px;
        color: #333333;
        margin-top: 4px;
      }
    }
  }
  }
 
  .charts-box {
    width: 100%;
    height: 100%;
    .echart {
      float: left;
      width: 578px;
      height: 379px;
      margin-right: 26px;
      margin-bottom: 24px;
      background-color: #fff;
      padding: 16px 24px 24px 24px;
      box-sizing: border-box;
    }
    // #echart5 {
    //   float: left;
    //   width: 1182px;
    //   height: 379px;
    //   background-color: #fff;
    // }
  }
}
</style>