<template>
  <div>
    <section id="section1" class="section-margine">
      <h2 class="little-title">业务范围</h2>
      <hr>
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="section-1-box">
              <div class="section-1-box-icon-background"><i class="fa fa-ambulance fa-2x"></i></div>
              <h4>多糖抗原及疫苗制剂</h4>
              <p style="text-align:left">专注于癌症、传染病的诊断预防及治疗</p>
            </div>
          </div>
          <div class="col-md-3  col-sm-6">
            <div class="section-1-box">
              <div class="section-1-box-icon-background"><i class="fa fa-user-md fa-2x"></i></div>
              <h4>糖蛋白糖肽偶联技术</h4>
              <p style="text-align:left">可用于新型结合疫苗及其它功能糖蛋白的制备</p>
            </div>
          </div>
          <div class="col-md-3  col-sm-6">
            <div class="section-1-box">
              <div class="section-1-box-icon-background"><i class="fa fa-h-square fa-2x"></i></div>
              <h4>高纯度低分子肝素钠制备</h4>
              <p style="text-align:left">可用于抗血栓、心血管疾病、抑制癌症、细胞治愈等治疗方案，以及食品检测跨行业应用</p>
            </div>
          </div>
          <div class="col-md-3  col-sm-6">
            <div class="section-1-box">
              <div class="section-1-box-icon-background"><i class="fa fa fa-heartbeat fa-2x"></i></div>
              <h4>小分子糖类药物制备技术</h4>
              <p style="text-align:left">运用于传染病，肿瘤的治疗及慢病管理</p>
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
  .section-margine {
    margin: 40px 0 0 0;
    text-align: center;
  }
  .section-margine hr {
    margin: 10px auto 40px;
    width: 800px;
  }
  .section-1-box {
    padding: 20px 0;
    text-align: center;
  }

  .section-1-box-icon-background {
    border-width:2px;
    border-style: solid;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto 25px auto;
  }

  .section-1-box-icon-background i {
    margin-top: 37px;
    color: #00AEF0;
  }

  .section-1-box h4 {
    color: #555555;
    font-size: 18px;
    margin: 0 0 15px 0;
  }

  .section-1-box p {
    color: #777;
    font-size: 14px;
  }

</style>
