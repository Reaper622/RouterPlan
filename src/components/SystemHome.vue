<template>
    <div class="home">
        <transition name="fade">
            <add-car v-show="addCarState" @successCar="addCarFade" @cancelCar="addCarFade"></add-car>
        </transition>
        <el-container>
            <el-header>

                <el-row class="headerRow"  :gutter="20" >
                    <el-col :span="8">
                        <img class="logo" src="../assets/UserSystem/images/path.png" alt="Logo">
                    </el-col>
                    <el-row class="headerRightRow" type="flex" justify="end">
                        <el-col :span="2">
                            <el-badge :value="0"  class="item">
                                <el-button icon="el-icon-bell"  circle></el-button>
                            </el-badge>
                        </el-col>
                        <el-col :span="3">
                            <el-dropdown>
                                <el-button >
                                    Help <i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>账户与安全</el-dropdown-item>
                                    <el-dropdown-item>联系我们</el-dropdown-item>
                                    <el-dropdown-item>如何使用?</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>
                        <el-col :span="3">
                            <span class="username">欢迎,{{username}}</span>
                        </el-col>
                        <el-col :span="3">
                          <el-tooltip class="item" effect="dark" content="注销" placement="bottom">
                           <el-button type="danger" icon="el-icon-close" @click="logout" >注销</el-button>
                          </el-tooltip>
                        </el-col>
                    </el-row>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                        :default-active="$route.path"
                        class="sideBar"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#2B333E"
                        text-color="#fff"
                        active-text-color="#409EFF"
                        :router="true">
                        <el-menu-item index="/home/canvas">
                            <i class="el-icon-menu"></i>
                            <span slot="title">路径演示</span>
                        </el-menu-item>
                        <el-menu-item index="/home/vehicleManagement">
                            <i class="el-icon-menu"></i>
                            <span slot="title">车辆管理</span>
                        </el-menu-item>
                        <el-menu-item index="/home/historyOrder">
                            <i class="el-icon-date"></i>
                            <span slot="title">历史订单</span>
                        </el-menu-item>
                        <el-menu-item index="/home/systemSetting">
                            <i class="el-icon-setting"></i>
                            <span slot="title">系统设置</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main v-loading="isLoading"><router-view @addCar="addCarShow" @loaded="isLoaded" ref="ref"></router-view></el-main>
                    <!-- <el-footer>
                        &copy;Copyright:2018 Mis Lab
                    </el-footer> -->
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import AddCar from './Home/VehicleManagement/addCar.vue'
export default {
    name:'systemHome',
    data(){
        return{
            username:null,
            addCarState: false,
            isLoading: true
        }
    },
    mounted(){
      this.username = this.$store.getters.getUserName
    },
    components:{
        AddCar
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      addCarShow(){
          this.addCarState = true
      },
      addCarFade(){
          this.addCarState = false;
          this.$refs.ref.loadCarInfo();
      },
      isLoaded(){
          this.isLoading = false
      },
      logout(){
        this.$confirm("您确定要注销当前账号?","提示",{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //注销请求
          this.$axios.delete('/userSystem/session/user')
            .then( res => {
              if(res.data.status == 1){
                this.$store.commit('logoutState')
                this.$router.replace({name:'loginLink'})
              }else{
                this.$notify({
                  title: '失败',
                  message: '注销失败',
                  type: 'waring'
                })
              }
            })
        }).catch(() => {
          this.$message({
            type:'info',
            message:'您已取消注销'
          })
        })
      }
    }
}
</script>

<style scoped>
     .el-header{
         padding: 0 15px;
         margin-top: 10px;
         background: #FFFFFF;
         box-shadow: 0px 5px 1px #E5E5E9;

     }
     .el-header .logo{
         width: 250px;
         height: 50px;
         margin: auto 30px;
     }
    .el-aside {
        background-color: #2B333E;
        text-align: center;
    }
    .el-main {
        margin-top: 10px;
        height: 1000px;
    }
    .el-footer{
        height: 60px;
        text-align: center;
        font-size: 20px;
        color: gray;
        line-height: 60px;
        border-top: 5px solid #2B333E;
    }
    .headerRightRow{
        height: 60px;
        margin: 5px 0;
    }
    .username{
        line-height: 40px;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

