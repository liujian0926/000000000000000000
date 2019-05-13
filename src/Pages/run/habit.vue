<template>
  <div class="container">
    <div class="title">
      <div class="box" v-for="(item,index) in dataList" :key="index">
        <div>本周总利润</div>
        <div>38,035,20</div>
      </div>
    </div>
    <div class="echart" id="echart1"></div>
    <div class="echart" id="echart2"></div>
    <div class="echart" id="echart3"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      dataList: [1, 2, 3, 4],
      option: {
        title: {
          text: "世界人口总量",
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["2011年"]
        },
        toolbox: {
          show: true,
          // feature: {
          //   mark: { show: true },
          //   dataView: { show: true, readOnly: false },
          //   magicType: { show: true, type: ["line", "bar"] },
          //   restore: { show: true },
          //   saveAsImage: { show: true }
          // }
        },
        calculable: true,
        xAxis: [
          {
            type: "value",
            boundaryGap: [0, 0.01]
          }
        ],
        yAxis: [
          {
            type: "category",
            data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"]
          }
        ],
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          // {
          //   name: "2012年",
          //   type: "bar",
          //   data: [19325, 23438, 31000, 121594, 134141, 681807]
          // }
        ]
      }
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById("echart1"));
    var myChart2 = echarts.init(document.getElementById("echart2"));
    var myChart3 = echarts.init(document.getElementById("echart3"));
    // console.log(myChart);

    // 设置图想置顶  this.option.xAxis.boundaryGap 留白项 默认为true

    // this.option.xAxis[0].boundaryGap = false;
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(this.option);
    myChart2.setOption(this.option);
    myChart3.setOption(this.option);
  }
};
</script>
<style lang="less" scoped>
.container {
  height: 1635px;
  padding: 24px;
  box-sizing: border-box;
  background-color: #f0f2f5;
  .title {
    overflow: hidden;
    .box {
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
  .echart {
    float: left;
    width: 1182px;
    height: 379px;
    margin-right: 26px;
    margin-bottom: 24px;
    background-color: #fff;
    padding: 16px 24px 24px 24px;
    box-sizing: border-box;
  }
}
</style>
