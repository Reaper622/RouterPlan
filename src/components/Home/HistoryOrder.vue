<template>
    <div class="main">
        <el-input
        placeholder="请输入所要查询的订单号"
        v-model="searchOrderId"
        size="medium"
        class="searchInput">
          <el-button slot="append" icon="el-icon-search" type="primary"></el-button>
        </el-input>
        <br>
        <br>
        <order :versions="versions"></order>
    </div>
</template>
<script>
import Order from  './order/Order.vue'
export default {
    data() {
        return{
            searchOrderId:'',
            //展示历史订单要用的数据
            versions:[
          {
          id:1,
          solutions:[
            {
              finalSolutionId:1,
              routes:[
                {id:1},
                {id:2}
              ],
              totalDis:100,
              userChoice:0,
              createTime:"2018-11-11 12:00:00"
            },
            {
              finalSolutionId:2,
              routes:[
                {id:1},
                {id:2}
              ],
              totalDis:100,
              userChoice:1,
              createTime:"2018-11-11 12:00:00"
            },
            {
              finalSolutionId:3,
              routes:[
                {id:1},
                {id:2}
              ],
              totalDis:100,
              userChoice:1,
              createTime:"2018-11-11 12:00:00"
            },
            {
              finalSolutionId:4,
              routes:[
                {id:1},
                {id:2}
              ],
              totalDis:100,
              userChoice:1,
              createTime:"2018-11-11 12:00:00"
            }
          ]
      },
        {id:2,
        solutions:[
        {
          finalSolutionId:1,
          routes:[
            {id:1},
            {id:2}
          ],
          totalDis:100,
          userChoice:0,
          createTime:"2018-11-11 12:00:00"
        }
      ]},
        {id:3},
        {id:4},
        {id:5}
      ]
        }
    },
    components:{
        Order
    }
}
</script>
<style scoped>
    .searchInput{
    width: 250px;
    margin-left: 20px;
  }
</style>

