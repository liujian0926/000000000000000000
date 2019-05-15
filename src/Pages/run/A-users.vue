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
       option3: {
         color: [
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
          data: ["预购"]
        },
        toolbox: {
          show: true,
          feature: {
            myTool : {
                show : true,
                title : '自定义扩展方法',
                icon : 'image://http://echarts.baidu.com/images/favicon.png',
                onclick : function (){
                    loadDrugs();
                }
             },

            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            // restore: { show: true },
            // saveAsImage: { show: true }
            
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
            name: "预购",
            type: "line",
            smooth: true,
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [30, 182, 434, 791, 390, 30, 10]
          }
        ]
      }
     
    }
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
    myChart1.setOption(this.option3);
    myChart2.setOption(this.option3);
    myChart3.setOption(this.option3);
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
