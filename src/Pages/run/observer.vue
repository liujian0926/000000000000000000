<template>
   <div class="container">

       <div class="box" v-for="(item,index) in dataList" :key="index">
           <div>本周平台积分收益</div>
           <div>38,035,20</div>
       </div>
       
   </div>
</template>
<script>
export default {
    data() {
        return {
            dataList:[1,2,3,4,5,6,7,8,9,0,9,9]
        }
    },
    
}
</script>
<style lang="less" scoped>
    .container{
        height: 100%;
        padding:24px;
        box-sizing: border-box;
        background-color: #F0F2F5;
        
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

               &:nth-child(1){
                   height: 20px;
                   font-size: 14px;
                   line-height: 20px;
                   color: #666666;
                   font-weight: bold;
               }
               &:nth-child(2){
                   margin-top: 1px;
                   height: 40px;
                   font-size: 32px;
                   color: #333333;
                   margin-top: 4px;
               }
           }
        }
    }
</style>