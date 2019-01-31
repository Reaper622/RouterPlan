<template>
  <div class="main">
    <el-row class="content">
        <el-col :span="18" class="canvasMap">
          <canvas id="map" width="1200px" height="800px"  @click="clickToDrawPoint">
            当前浏览器不支持Canvas，请升级浏览器或更换浏览器访问。
          </canvas>
        </el-col>
        <el-col :span="4" class="side"></el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas : null,
      ctx : null,
      points:[]
    }
  },
  mounted(){
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      this.canvas = document.getElementById('map');
      this.ctx = this.canvas.getContext('2d');
    },
    //画点，传递渲染上下文、x坐标、y坐标、半径
    drawPoint(ctx,x,y,radius) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI*2, true);
      ctx.fill();

    },
    //点击实现画点
    clickToDrawPoint(e){
      //获取坐标
      let coordinate = this.getMousePos(this.canvas, e);
      //画点
      this.drawPoint(this.ctx, coordinate.x, coordinate.y, 5);
      //把点存入数据集
      this.points.push(coordinate);
    },
    //获取在canvas的坐标
    getMousePos(canvas, event) {

      let rect = canvas.getBoundingClientRect();
      //保证画布的像素值和显示在页面上的尺寸不一致的情况下，也能够正确获取到鼠标相对于canvas中的坐标
      let x = event.clientX - rect.left * (canvas.width / rect.width);
      let y = event.clientY - rect.top * (canvas.height / rect.height);
      return {x:x,y:y}
    }
  }
}
</script>

<style scoped>
  .content{
    position: relative;
    margin-top: 20px;
    height: 800px;
  }
  .canvasMap{
    position: relative;
    height: 100%;
    overflow-x:scroll;
    overflow-y: hidden;
  }
  .side{
    position: relative;
    border: 3px solid #888;
    height: 100%;
  }
  #map{
    position: absolute;
    cursor: pointer;
    background: #888;
  }
</style>

