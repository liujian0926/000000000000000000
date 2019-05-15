<template>
   <div class="container">
       <div class="box" v-for="(item,index) in dataList" :key="index">
          <span>平台持有USDT</span>
           <div>18,035,20</div>
       </div>   
   </div>
</template>
<script>
export default {
    data() {
        return {
            dataList:[1,2,3,4,5,6,7,8]
        }
    },
    
}
</script>
<style lang="less" scoped>
    .container{
        height: 700px;
        padding:24px;
        box-sizing: border-box;
        background-color: #F0F2F5;
         .box {
            width: 276px;
            height: 148px;
            float: left;
            background-color: #fff;
            padding: 30px 0 0 40px;
            box-sizing: border-box;
            margin-right: 22px;
            margin-bottom: 20px;
               span{
                   display: block;
                   height: 20px;
                   width: 100px;
                   font-size: 14px;
                   line-height: 20px;
                   color: #979DAC;
                   margin-left: 5px;
                   position: relative;
               }
               span::before {
                   position: absolute;
                   top:3px;
                   left: -9px;
                   content: '';
                   display: block;
                   width: 4px;
                   height: 15px;
                   background-color: #419EFF;
                   
               }
               div{
                   height: 37px;
                   font-size: 32px;
                   line-height: 37px;
                   color: #1E2C3C;
                   margin-top: 20px;
                   font-weight: bold;
               }
           }
        
    }
</style>