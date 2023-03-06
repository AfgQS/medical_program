<template>
  <div>
    <section id="section4" class="section-4 section-margine">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <header class="title-head">
              <h2 class="litter-title">医疗科创平台</h2>
              <hr>
              <p class="introduction">新合诚的医疗科创平台，立足于医疗和科创资源丰富的德国、法国和荷兰，范围涉及全欧洲。我们的团队拥有多所欧洲顶级医药学院的博士后，他们有着多年工作于全欧领先大学医院、药学院和世界前500强公司的经验，并曾从事与欧洲多家顶级医院和研究中心的项目合作。</p>
              <div class="line-heading">
                <span class="line-left"></span>
                <span class="line-middle">+</span>
                <span class="line-right"></span>
              </div>
            </header>
          </div>
          <div class="col-md-4 col-sm-6">
            <ul class="section">
              <li><a href="javascript:;" class="btn btn-primary btn-sm" style="margin-bottom: 10px">医疗互助</a>
                <p style="text-align: left">我们倚赖德国和欧洲的先进资源，为您提供疾病的解决方案。海外团队成员与多个德国及欧洲著名医疗机构有合作经验，如德国癌症中心（DKFZ），慕尼黑大学医院，德国国家肿瘤中心（NCT），以及瑞典卡罗林斯卡大学医学院（Karolinska）等。</p>
              </li>
            </ul>
            <ul class="section two">
              <li>
                <a href="javascript:;" class="btn btn-primary btn-sm" style="margin-bottom: 10px">服务内容</a>
                <div class="text-description"><i class="fa fa-check-square text-description-icon"></i>医疗咨询服务：第二诊疗意见等</div>
                <div class="text-description"><i class="fa fa-check-square text-description-icon"></i>跨境医疗：体检，跨境医疗，疗养，运动医疗等</div>
                <div class="text-description"><i class="fa fa-check-square text-description-icon"></i>跨境参观考察：欧洲医院管理模式和养老模式</div>
              </li>
            </ul>
          </div>
          <div class="col-md-4 hidden-sm hidden-xs" data-wow-delay=".2s"><img alt="" style="width: 100%" src="~@/assets/medical.png"></div>
          <!-- end left -->
          <div class="col-md-4 col-sm-6">
            <ul class="section three">
              <li><a href="javascript:;" class="btn btn-primary btn-sm" style="margin-bottom: 10px">科创平台</a>
                <p style="text-align: left">我们以丰富的科创资源，为您搭建科技平台。团队核心成员曾参与欧洲著名研究机构或顶尖药企合作项目，如欧洲核子研究组织(CERN)，巴黎巴斯德研究所，荷兰莱顿研究院，赛诺菲制药，赛诺菲-巴斯德疫苗，达姆施塔特亥姆霍兹重离子研究中心（GSI）等；并和商校德国管理与法律研究院（GGS）有合作。</p>
              </li>
            </ul>
            <ul class="section four">
              <li><a href="javascript:;" class="btn btn-primary btn-sm" style="margin-bottom: 10px">服务内容</a>
                <div class="text-description"><i class="fa fa-check-square text-description-icon"></i>跨境参观考察 </div>
                <div class="text-description"><i class="fa fa-check-square text-description-icon"></i>技术引进输出</div>
                <div class="text-description"><i class="fa fa-check-square text-description-icon"></i>学术交流</div>
              </li>
            </ul>
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
  /*** Heading Lines ***/
  .title-head{
    margin:40px 0;
    text-align: center;
  }
  .title-head hr {
    margin: 10px auto 40px;
    width: 800px;
  }
  .title-head .introduction {
    font-size: 16px;
    text-align: left;
  }
  .line-heading .line-left,
  .line-heading .line-right {
    width: 55px;
    height: 0;
    border-top: 1px dashed #00AEF0;
    display: inline-block;
    margin: 5px 15px;
    vertical-align: middle;
  }
  .line-heading .line-left {
    margin-right: 30px;
  }
  .line-heading .line-right {
    margin-left: 30px;
  }
  .line-middle {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    position: relative;
    line-height: 20px;
    color: #fff;
    font-size: 16px;
    background: #00AEF0;
    border-radius: 50%;
  }
  .line-middle:before,
  .line-middle:after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background: #00AEF0;
    top: 7px;
  }
  .line-middle:before {
    left: -20px;
  }
  .line-middle:after {
    right: -20px;
  }
  .section-4 ul.section {
    float: left;
    width: 100%;
    padding: 0 3% 22px 0;
    margin: 25px 0 0 0;
    background: #fff;
  }

  .section-4 .section li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .section-4 .section li a {
    font-size: 16px;
    color: #fff;
  }
  .section-4 .text-description{
    text-align: left;
  }
  .section-4 .text-description-icon{
    font-size: 16px;
    color: #1889c1;
    padding-right: 12px;
  }
  .btn {
    padding: 10px 20px;
    font-weight: 300;
    border-radius: 0;
  }
  .btn-sm{
    padding: 6px 15px;
  }
  .btn-primary {
    color: #fff;
    background-color: #00aef0;
    border-color: #00aef0;
  } 
   .btn-primary:hover {
    color: #fff;
    background-color: #0393ca;
    border-color: #0393ca;
  }
</style>
