<template>
  <div class="solution">
    <el-row type="flex" class="row">
      <el-col :span="8" :offset="1">
        <div class="title">
          方案{{finalSolutionId}}
        </div>
      </el-col>
      <el-col :span="6" :offset="8">
        <div class="">
          <el-button type="primary" plain size="mini">查看</el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="">
          <el-button type="danger" plain size="mini">删除</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row" justify="space-around">
      <el-col :span="6">
        <div class="">
          总距离:
        </div>
      </el-col>
      <el-col :span="6">
        <div class="">
          {{totalDis}}
        </div>
      </el-col>
      <el-col :span="6">
        <div class="">

        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row" justify="space-around">
      <el-col :span="6">
        <div class="">
          创建时间:
        </div>
      </el-col>
      <el-col :span="14">
        <div class="">
          {{createTime}}
        </div>
      </el-col>
    </el-row>
    <div class="choiceRow" v-show="userChoice == 1 ? true : false">
      <span>该方案为您所选方案</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['finalSolutionId','totalDis','userChoice','createTime','routes'],
  data(){
    return{
    }
  },
  mounted(){

  },

}
</script>

<style scoped>
  .solution{
    position: relative;
    width: 100%;
    height: 130px;
    box-sizing: border-box;
    border-bottom: 10px solid RGB(64, 158, 255,0.5);
  }
  .row{
    height: 30px;
    line-height: 30px;
  }
  .title{
    font-size: 20px;
  }
  .choiceRow{
    width: 100%;
    height: 30px;
    color: white;
    background: RGB(100, 229, 91);
    text-align: center;
    line-height: 30px;
  }

</style>

