<template>
    <div  class="main">
        <el-input
        placeholder="请输入所要查询的车辆id"
        v-model="searchVehicleId"
        size="medium"
        class="searchInput">
          <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
        </el-input>

        <el-button type="danger" class="deleteButton" @click="deleteCarIt">删除车辆 <i class="el-icon-remove"></i></el-button>
        <el-button type="success" class="addButton" @click="addCarIt">录入车辆 <i class="el-icon-circle-plus"></i></el-button>
        <br>
        <br>

        <car v-for="car in cars" :key="car.vehicleId"
            :vehicle-id="car.vehicleId"
            :type="car.type"
            :capacity="car.capacity"
            :oil="car.oil"
            :price="car.price"
            :del-flag="car.delFlag"></car>
    </div>
</template>
<script>
import Car from './VehicleManagement/car.vue'

export default {
    data() {
      return{
        searchVehicleId: '',//搜索车辆的Id
        cars:[]
      }
    },
    components: {
      Car
    },
    methods: {
      addCarIt() {
        this.$emit('addCar');
        this.loadCarInfo();
      },
      deleteCarIt() {
        this.$confirm("你确定要删除所选择的车辆","提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( () => {
          //批量删除
          console.log(this.$store.getters.getDeleteArray)
        }).catch(() => {
          this.$message({
            type:'info',
            message:'您已取消删除'
          })
        })
      },
      loadCarInfo(){
        this.$axios({
          methods:'get',
          url:'/vehicleSystem/user/vehicle',
        })
          .then( (res) => {
            console.log(res);
            this.cars = res.data.status;
          })
      }
    },
    mounted(){
      this.loadCarInfo();
      //加载完成触发已加载事件
      this.$emit('loaded');
    }
}
</script>
<style scoped>
  .searchInput{
    width: 250px;
    margin-left: 20px;
  }
  .addButton{
    float: right;
    margin-right: 50px;
  }
  .deleteButton{
    float: right;
    margin-right: 100px;
  }
  .selectedCar{
    border: 2px solid #409EFF;
  }
</style>

