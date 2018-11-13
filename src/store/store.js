import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex)

export default () => {
  return new Vuex.Store({
    state: {
      userId:null,
      //批量删除的数组
      deleteArray:[]
    },
    mutations:{
      loginState(state,userId) { //第一个参数为state，第二个为传递的参数
        //用sessionStorage存储登录userId可防止用户刷新后state内登录态清空
        sessionStorage.setItem('userId',userId);
        state.userId = userId;
      },
      logoutState(state,userId){ //第一个参数为state，第二个为传递的参数
        //删除sessionStorage内存储的userId
        sessionStorage.removeItem('userId');
        state.userId = userId;
      },
      //添加批量删除数组的内容
      deleteArrayAdd(state,deleteId){
        state.deleteArray.push(deleteId);
      },
      //删除批量删除数组的内容
      deleteArrayDelete(state,deleteId){
        let index =state.deleteArray.indexOf(deleteId);
        state.deleteArray.splice(index,1);
      }
    },
    getters:{
      getUserId(state){
        if(state.userId == null){
          //如果state内为空就去查询sessionStorage内的userId
          state.userId = sessionStorage.getItem('userId');
        }
        return state.userId;
      },
      getDeleteArray(state){
        return state.deleteArray
      }
    }
  })
}
