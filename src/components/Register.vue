<template>
    <div class="main">
        <div class="register">
            <div class="topPanel">
                <span>注册路径优化系统</span>
            </div>
            <el-row  class="row" >
                       <el-col :span="12" :offset="2">
                           <el-input
                            placeholder="输入用户名"
                            prefix-icon="el-icon-edit"
                            v-model="usernameInput">
                            </el-input>
                       </el-col>
            </el-row>
            <el-row  class="row" >
                       <el-col :span="12" :offset="2">
                           <el-input
                            placeholder="输入密码"
                            prefix-icon="el-icon-edit"
                            v-model="passwordInput">
                            </el-input>
                       </el-col>
            </el-row>
            <el-row  class="row" >
                       <el-col :span="12" :offset="2">
                           <el-input
                            placeholder="确认密码"
                            prefix-icon="el-icon-edit"
                            v-model="repasswordInput">
                            </el-input>
                       </el-col>
            </el-row>
            <el-row  class="row" >
                       <el-col :span="12" :offset="2">
                           <el-input
                            placeholder="输入邮箱"
                            prefix-icon="el-icon-edit"
                            v-model="emailAddressInput">
                            </el-input>
                       </el-col>
                       <el-col :span="1" :offset="1">
                           <el-button type="primary"  icon="el-icon-message" @click="verifyEmail">验证邮箱</el-button>
                       </el-col>
            </el-row>
            <el-row  class="row" >
                       <el-col :span="12" :offset="2">
                           <el-input
                            placeholder="输入邮箱验证码"
                            prefix-icon="el-icon-edit"
                            v-model="emailVerifyCodeInput">
                            </el-input>
                       </el-col>
            </el-row>
            <el-row class="row reg" type="flex" justify="center">
                <el-col :span="6">
                    <el-button type="primary" size="medium" @click="regist">立 即 注 册</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usernameInput:'',
            passwordInput:'',
            repasswordInput:'',
            emailAddressInput:'',
            emailVerifyCodeInput:''
        }
    },
    methods:{
      //注册事件
      regist(){
        if(this.checkUsername() && this.checkPassword()&& this.checkRepassword() && this.checkEmail() && this.checkEmailVerifyCode()){
          //发送注册请求
        }
      },
      //检查用户名
      checkUsername(){
        if(this.usernameInput === ''){
          this.$alert('输入用户名为空','提示',{
            confirmButtonText: '我知道了'
          })
        }else{
          return true;
        }
      },
      //检查密码
      checkPassword(){
        if(this.passwordInput === ''){
          this.$alert('输入密码为空','提示',{
            confirmButtonText: '我知道了'
          })
        }else{
          return true;
        }
      },
      //检查两次密码输入是否相同
      checkRepassword(){
        if(this.passwordInput != this.repasswordInput){
          this.$alert('输入两次密码不一致','提示',{
            confirmButtonText: '我知道了'
          })
        }else{
          return true;
        }
      },
      //检查邮箱
      checkEmail(){
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(reg.test(this.emailAddressInput)){
          return true;
        }else{
          this.$alert('邮箱格式有误','提示',{
            confirmButtonText: '我知道了'
          })
        }
      },
      //检查邮箱验证码
      checkEmailVerifyCode(){
        if(this.emailVerifyCodeInput === ''){
          this.$alert('邮箱验证码为空','提示',{
            confirmButtonText: '我知道了'
          })
        }else{
          return true;
        }
      },
      //给邮箱发送验证码
      verifyEmail(){
        if(this.checkEmail()){
          //发送验证码请求
          
        }
      }
    }
}
</script>

<style scoped>
    .main{
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .register{
        position: relative;
        height: 600px;
        width: 400px;
        border: 2px solid #A1BAD4;
    }
    .topPanel{
        width: 100%;
        height: 60px;
        background: #F7F7F7;
        text-align: center;
        border-bottom: 2px solid #409EFF;
    }
    .topPanel span{
        position: relative;
        display: inline-block;
        letter-spacing: 0.5em;
        font-size: 30px;
        line-height: 60px;
        color: #409EFF;
    }
    .row{
        padding-top: 30px;
    }
    .reg{
        padding-top: 80px;
    }
</style>

