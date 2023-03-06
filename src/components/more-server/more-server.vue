<template>
  <div>
    <section id="section3" class="section-margine section3-background">
      <div class="container">
        <div class="row">
          <h4 class=title-text>我们为生物医药企业提供联合研发及技术顾问服务，开拓更多应用</h4>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-6">
            <div class="section-3-box">
              <figure><i class="fa fa-desktop fa-2x"></i></figure>
              <h4>技术顾问</h4>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="section-3-box">
              <figure><i class="fa fa-group fa-2x"></i></figure>
              <h4>产业升级</h4>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="section-3-box">
              <figure><i class="fa fa-coffee fa-2x"></i></figure>
              <h4>环保标准</h4>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="section-3-box">
              <figure><i class="fa fa-bar-chart fa-2x"></i></figure>
              <h4>实验及生产管理升级</h4>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="section-3-box">
              <figure><i class="fa fa-cogs fa-2x"></i></figure>
              <h4>设备组建</h4>
            </div>
          </div><div class="col-md-2 col-sm-6">
          <div class="section-3-box">
            <figure><i class="fa fa-child fa-2x"></i></figure>
            <h4>人员培训</h4>
          </div>
        </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  #section3 .title-text{
    color: white;
    font-size: 24px;
    padding-top: 50px;
    text-align: center;
  }

  .section3-background {
    background: #333333 url(~@/assets/more-server.jpg) no-repeat;
    background-size: cover;
  }

  .section-3-box {
    padding: 30px 0 35px;
    text-align: center;
  }

  .section-3-box figure {
    color: #00AEF0;
    margin: 12px 0;
  }
  .section-3-box h4 {
    font-size: 18px;
    color: #fff;
    margin-bottom: 0;
  }


</style>
