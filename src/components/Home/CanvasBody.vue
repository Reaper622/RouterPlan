<template>
  <div class="main">
      <el-steps :active="0" finish-status="success" simple style="margin-top: 20px">
        <el-step title="选择中心点" ></el-step>
        <el-step title="选择路径点" ></el-step>
        <el-step title="选择车辆" ></el-step>
        <el-step title="路径展示" ></el-step>
      </el-steps>


  </div>
</template>
<script>
import SelectCenter from './canvas/SelectCenter'
import SelectRoutePoint from './canvas/SelectRoutePoint'
import SelectVehicle from './canvas/SelectVehicle'
import ShowRoute from './canvas/showRoute'
export default {
  data: () => {
    return {

    }
  },
  components: {
    SelectCenter,
    SelectRoutePoint,
    SelectVehicle,
    ShowRoute
  }
}
</script>

<style scoped>

</style>

