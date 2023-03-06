<template>
  <div>
    <div class="banner-bottom">
        <h2 class="little-title">新合诚研究院</h2>
        <hr>
        <p class="description-text">新合诚研究院重点激励下一代创新者，通过持续资助科技创新，不断将世界级的科技带入医疗事业。</p>
        <a href="#gallery" class="arrow scroll fa fa-arrow-down"> </a>
    </div>
    <!--//banner-bottom-->
    <!--gallery-->
    <div class="gallery clearfix" id="gallery">
      <div class="col-md-6 gallery-left">
        <h4>协同区域高校合作</h4>
        <h4>共建研发实践岗位</h4>
      </div>
      <div class="col-md-6 gallery-right">
        <div class="gallery-grid-a">
          <h4>利用跨国科研优势</h4>
          <h4>促进人才交流机遇</h4>
        </div>
        <div class="gallery-grid-b">
          <h4>提倡国际科研合作</h4>
          <h4>共建研发实践岗位</h4>
        </div>
      </div>
    </div>
    <!--//gallery-->
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .banner-bottom{
    padding-top: 40px;
  }
  .banner-bottom hr {
    margin: 10px auto 40px;
    width: 800px;
  }
  .description-text{
    font-size: 16px;
  }

  /*--gallery--*/
  .gallery-left{
    min-height: 600px;
    background: url(~@/assets/business4.jpg) no-repeat 50% 50%;
    background-size: cover;
    padding: 14% 0;
  }
  .gallery-right{
    padding: 0!important;
  }
  .gallery-grid-a{
    line-height: 300px;
    min-height: 300px;
    background: url(~@/assets/business5.jpg)no-repeat 50% 50%;
    background-size: cover;
    padding: 10% 0;
  }
  .gallery-grid-b{
    min-height: 300px;
    background: url(~@/assets/business6.jpg)no-repeat 50% 50%;
    background-size: cover;
    padding: 10% 0;
  }
  .gallery h4 {
    font-size: 20px;
    text-align: center;
    color: #fff;
    padding: 15px 0px;
  }
  /*--//gallery--*/
  /*--work--*/
  .banner-bottom a {
    font-size: 40px;
    display: block;
    width: 60px;
    height: 20px;
    margin: 50px auto;
  }
</style>
