<template>
    <div id="field">
        <div>
          <h2 class="little-title">聚焦领域</h2>
          <hr>
          <p class="description-text" style="font-size:20px;text-align:left">基于高效研发的创新是新合诚重要的增长引擎，我们的团队不断研发创新工艺，追求可持续发展的未来。我们基于生化以及医疗领域的解决方案几乎涵盖整个领域，这也是我们希冀长期成功的要素。</p>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-12 box">
            <div class="circle-wrapper">
              <i class="fa fa-medkit icon"></i>
            </div>
            <p class="text">生化科技</p>
          </div>
          <div class="col-md-4 col-sm-12 box">
            <div class="circle-wrapper">
              <i class="fa fa-database icon"></i>
            </div>
            <div class="text">
              数据平台
          </div>
          </div>
          <div class="col-md-4 col-sm-12 box">
            <div class="circle-wrapper">
              <i class="fa fa-comments icon"></i>
            </div>
            <p class="text">
              医疗互助
          </p>
          </div>
        </div>
      </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  /*#field start*/
  #field {
    text-align: center;
    padding: 0 60px;
  }

  #field hr {
    margin: 10px auto 40px;
    width: 800px;
  }
  #field .box{
    text-align: center;
    padding:50px;
  }
  #field .circle-wrapper{
    display: inline-block;
    width:100px;
    height: 100px;
    border: 1px solid #37B7E5;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
  }
  #field .icon{
    color: #37B7E5;
    font-size: 20px;
  }

  #field .text{
    font-size: 20px;
    color: #37B7E5;
    padding-top: 20px;
  }

</style>
