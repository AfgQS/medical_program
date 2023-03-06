<template>
  <section id="team">
    <div class="team-introduction">
      <h2 style="font-weight: bold">世界级的团队</h2>
      <hr />
      <p style="font-size: 20px; text-align:left">
        我们的核心队伍由五位归国博士组成，长期专注于攻克疾病的医疗事业，带来世界级先进的生化科技和治疗方案，将先进的技术应用于肿瘤学、心血管疾病，糖尿病、炎症及运动医学等领域。
      </p>
    </div>
    <div class="row">
      <div class="col-md-4 text-center item-wrap">
        <figure class="wrap">
          <img src="~@/assets/team1.jpg" alt="" />
          <figcaption>
            <h3>这里是成员姓名</h3>
            <p>
              这里是成员的介绍这里是成员的介绍这里是成员的介绍这里是成员的介绍
            </p>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-phone"></i>
          </figcaption>
        </figure>
      </div>
      <div
        class="col-md-4 text-center item-wrap">
        <figure class="wrap">
          <img src="~@/assets/team2.jpg" alt="" />
          <figcaption>
            <h3>这里是成员姓名</h3>
            <p>
              这里是成员的介绍这里是成员的介绍这里是成员的介绍这里是成员的介绍
            </p>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-phone"></i>
          </figcaption>
        </figure>
      </div>
      <div
        class="col-md-4 text-center item-wrap">
        <figure class="wrap">
          <img src="~@/assets/team3.jpg" alt="" />
          <figcaption>
            <h3>这里是成员姓名</h3>
            <p>
              这里是成员的介绍这里是成员的介绍这里是成员的介绍这里是成员的介绍
            </p>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-phone"></i>
          </figcaption>
        </figure>
      </div>
      <div
        class="col-md-4 text-center item-wrap">
        <figure class="wrap">
          <img src="~@/assets/team1.jpg" alt="" />
          <figcaption>
            <h3>这里是成员姓名</h3>
            <p>
              这里是成员的介绍这里是成员的介绍这里是成员的介绍这里是成员的介绍
            </p>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-phone"></i>
          </figcaption>
        </figure>
      </div>
      <div
        class="col-md-4 text-center item-wrap">
        <figure class="wrap">
          <img src="~@/assets/team2.jpg" alt="" />
          <figcaption>
            <h3>这里是成员姓名</h3>
            <p>
              这里是成员的介绍这里是成员的介绍这里是成员的介绍这里是成员的介绍
            </p>
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-phone"></i>
          </figcaption>
        </figure>
      </div>
      <div class="col-md-4 text-center item-wrap">
        <div class="box">
          <h4>我们在招聘</h4>
          <p>这里是加入我们的文字加入我们的文字加入我们的文字</p>
          <a href="#">加入我们</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
#team {
  padding: 0 50px;
}
/*team start*/
#team hr {
  margin: 10px auto 40px;
  width: 800px;
}
#team .team-introduction {
  text-align: center;
}

#team .item-wrap {
  padding: 20px;
}
#team .wrap {
  width: 100%;
  height: 286px;
  position: relative;
  text-align: center;
  overflow: hidden;
}
#team .wrap img {
  width: 100%;
  height: auto;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
#team > .row {
  text-align: center;
}
#team .wrap figcaption h2 {
  padding: 10px;
}

h2 {
  padding-top: 20px;
  text-align: center;
}

#team > .row > p {
  font-size: 20px;
  padding: 20px;
}

#team .wrap figcaption p {
  font-size: 13px;
}
#team .box {
  border: 1px solid #37b7e5;
  height: 286px;
  padding: 30px;
  text-align: center;
  font-size: 16px;
}

#team .box a {
  margin-top: 40px;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border: 1px solid #37b7e5;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

#team .box a:hover {
  background-color: #37b7e5;
  color: white;
}

#team .wrap figcaption {
  padding: 40px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
  background-color: rgba(55, 183, 229, 0);
  color: white;
  text-align: center;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 0;
}
#team figure:hover figcaption {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(55, 183, 229, 0.8);
  color: white;
  text-align: center;
  opacity: 1;
}

#team figure:hover img {
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
#team figure {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
#team figure:hover {
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

#team figcaption i {
  font-size: 18px;
  margin: 12px;
  padding: 10px;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
}
/*team end*/
</style>
