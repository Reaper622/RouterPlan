<template>
  <div class="main">
    <el-row class="content">
        <el-col :span="20" class="canvasMap"></el-col>
        <el-col :span="4" class="side"></el-col>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .content{
    margin-top: 20px;
    height: 800px;
  }
  .canvasMap{
    background: gray;
    height: 100%;
  }
</style>

