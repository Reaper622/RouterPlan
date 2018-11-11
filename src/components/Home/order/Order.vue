<template>
    <div class="order">
        <div class="title">
          <span class="questionId">订单号:123456789123</span>
           <el-tooltip class="item" effect="dark" content="删除" placement="left">
            <el-button type="danger" icon="el-icon-delete" circle class="deleteButton"></el-button>
           </el-tooltip>
          <span class="time">2018-11-11</span>
        </div>
        <div class="versionContainer">
          <version></version>
        </div>
        <div class="bottomLine">
        </div>
    </div>
</template>

<script>
import Version from './Version.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    Version
  }

}
</script>

<style scoped>
    .order{
        position: relative;
        display: inline-block;
        width: 1300px;
        height: 500px;
        border: 1px solid #EBEEF5;
        border-radius: 10px;
        transition: box-shadow .3s ease;
        overflow: hidden;
    }
    .order:hover{
        box-shadow: 0 0 10px #888888;
    }
    .title{
        position: absolute;
        width: 100%;
        height: 60px;
        background: #409EFF;
        font-size: 20px;
        color: white;
        line-height: 60px;
    }
    .questionId{
      margin-left: 50px;
    }
    .time{
      float: right;
      margin-right: 30px;
    }
    .versionContainer{
      position: absolute;
      top:60px;
      width: 100%;
      height: 400px;
      background: #E8E8E8;
    }
    .bottomLine{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40px;
      background: #E8E8E8;
    }
    .deleteButton{
      float: right;
      margin-right: 30px;
      margin-top: 10px;
    }
</style>


