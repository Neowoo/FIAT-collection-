<template>
  <section class="page-section w-100 py-5 mt-5 mb-5">
    <div class="after-resized-menuBtn" @click="showMenu = !showMenu"></div>
    <div class="after-resized-muscleMenu position-fixed" v-show="showMenu">
     <div
        class="nav nav-pills menuPoint d-flex flex-column"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          v-for="(point,index) in musclePoint"
          :key="index"
          class="nav-link"
          :class="{active: point.active}"
          :id="point.id"
          data-toggle="pill"
          :href="point.href"
          :data-tab-name="point.dataName"
          @click="showMenu = !showMenu"
        >{{point.dataName}}</a>
      </div>
    </div>
    <img class="equip-BG1 position-absolute equipBG" src="../assets/purpleBG/purpleBG6.png">
    <img class="equip-BG2 position-absolute equipBG" src="../assets/purpleBG/purpleBG7.png">
    <div id="muscleMenu" class="row d-flex justify-content-center" style="margin-top: 5%;">
      <div
        class="nav nav-pills menuPoint h-100 px-5 position-fixed d-flex flex-column"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          v-for="(point,index) in musclePoint"
          :key="index"
          class="before-resize nav-link"
          :class="{active: point.active}"
          :id="point.id"
          data-toggle="pill"
          :href="point.href"
          :data-tab-name="point.dataName"
        >{{point.dataName}}</a>
      </div>
      <div class="tab-content col-12 row" id="v-pills-tabContent" style="text-align: left;">
        <!-- 肩 -->
        <div
          class="w-100 tab-pane fade show active"
          id="shoulder"
          role="tabpanel"
          aria-labelledby="shoulder-tab"
        >
          <div class="d-flex justify-content-center">
            <img class=" col-6 col-sm-3 musclePic" src="../assets/muscleMap/三角肌.svg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-12 col-sm-6 offset-sm-1 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="(shoulder,index) in shoulderVideo"
                  :key="index"
                  :class="{active: shoulder.show}"
                  :id="shoulder.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="shoulder.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="shoulder in shoulderVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: shoulder.show}"
                    :id="shoulder.dataNum"
                    data-toggle="tab"
                    :href="shoulder.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="shoulder.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{shoulder.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 手臂 -->
        <div class="tab-pane w-100 fade" id="arm" role="tabpanel" aria-labelledby="arm-tab">
          <div class="d-flex justify-content-center">
            <img class="col-6 col-sm-3 musclePic" src="../assets/muscleMap/二頭肌.svg" alt>
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-12 col-sm-6 offset-sm-1 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="arm in armVideo"
                  :class="{active: arm.show}"
                  :id="arm.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="arm.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="arm in armVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: arm.show}"
                    :id="arm.dataNum"
                    data-toggle="tab"
                    :href="arm.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="arm.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{arm.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 胸肌 -->
        <div
          class="tab-pane w-100 fade"
          id="chest"
          role="tabpanel"
          aria-labelledby="chest-tab"
        >
          <div class="d-flex justify-content-center">
            <img class="col-6 col-sm-3 musclePic" src="../assets/muscleMap/胸大肌.svg" alt>
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-12 col-sm-6 offset-sm-1 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="chest in chestVideo"
                  :class="{active: chest.show}"
                  :id="chest.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="chest.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="chest in chestVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: chest.show}"
                    :id="chest.dataNum"
                    data-toggle="tab"
                    :href="chest.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="chest.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{chest.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 腹肌 -->

        <div
          class="tab-pane w-100 fade"
          id="belly"
          role="tabpanel"
          aria-labelledby="belly-tab"
        >
          <div class="d-flex justify-content-center">
            <img class="col-6 col-sm-3 musclePic" src="../assets/muscleMap/腹部.svg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-12 col-sm-6 offset-sm-1 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="belly in bellyVideo"
                  :class="{active: belly.show}"
                  :id="belly.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="belly.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="belly in bellyVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: belly.show}"
                    :id="belly.dataNum"
                    data-toggle="tab"
                    :href="belly.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="belly.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{belly.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 背 -->
        <div
          class="tab-pane w-100 fade"
          id="back"
          role="tabpanel"
          aria-labelledby="back-tab"
        >
          <div class="d-flex justify-content-center">
            <img class="col-6 col-sm-3 musclePic" src="../assets/muscleMap/背部.svg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-12 col-sm-6 offset-sm-1 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="back in backVideo"
                  :class="{active: back.show}"
                  :id="back.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="back.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="back in backVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: back.show}"
                    :id="back.dataNum"
                    data-toggle="tab"
                    :href="back.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="back.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{back.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 臀 -->
        <div
          class="tab-pane w-100 fade"
          id="hip"
          role="tabpanel"
          aria-labelledby="hip-tab"
        >
          <div class="d-flex justify-content-center">
            <img class="col-6 col-sm-3 musclePic" src="../assets/muscleMap/臀部.svg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-sm-6 offset-sm-1 col-12 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="hip in hipVideo"
                  :class="{active: hip.show}"
                  :id="hip.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="hip.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="hip in hipVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: hip.show}"
                    :id="hip.dataNum"
                    data-toggle="tab"
                    :href="hip.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="hip.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{hip.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>        

        <!-- 腿 -->
        <div
          class="tab-pane w-100 fade"
          id="leg"
          role="tabpanel"
          aria-labelledby="leg-tab"
        >
          <div class="d-flex justify-content-center">
            <img class="col-6 col-sm-3 musclePic" src="../assets/muscleMap/臀部.svg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div class="mr-5 p-4 col-sm-6 offset-sm-1 col-12 tab-content videoPlace">
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="leg in legVideo"
                  :class="{active: leg.show}"
                  :id="leg.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="leg.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>

              <ul class="nav col-12 col-sm-4 justify-content-between myTab" role="tablist">
                <li class="col-12 nav-item" v-for="leg in legVideo">
                  <a
                    class="nav-link col-12"
                    :class="{active: leg.show}"
                    :id="leg.dataNum"
                    data-toggle="tab"
                    :href="leg.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="leg.link">
                      <p class="col-7 d-flex align-items-center pr-3">{{leg.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> 

      </div>
    </div>
  </section>
</template>
<script>
import shoulderVideo1 from "../assets/muscle-miniPic/shoulder/shoulder-six-methods.png";
import shoulderVideo2 from "../assets/muscle-miniPic/shoulder/shoulder2.png";
import shoulderVideo3 from "../assets/muscle-miniPic/shoulder/shoulder3.png";
import shoulderVideo4 from "../assets/muscle-miniPic/shoulder/shoulder4.png";

import armVideo1 from "../assets/muscle-miniPic/arm/arm1.png";
import armVideo2 from "../assets/muscle-miniPic/arm/arm2.png";
import armVideo3 from "../assets/muscle-miniPic/arm/arm3.png";
import armVideo4 from "../assets/muscle-miniPic/arm/arm4.png";
import armVideo5 from "../assets/muscle-miniPic/arm/arm5.png";

export default {
  name: "trainingEdu",
  data() {
    return {
      showMenu: false,
      homeOff: false,
      musclePoint: [
        {
          active: true,
          id: "shoulder-tab",
          href: "#shoulder",
          dataName: "肩",
        },
        {
          active: false,
          id: "arm-tab",
          href: "#arm",
          dataName: "手臂",
        },
        {
          active: false,
          id: "chest-tab",
          href: "#chest",
          dataName: "胸肌",
        },
        {
          active: false,
          id: "belly-tab",
          href: "#belly",
          dataName: "腹肌",          
        },
        {
          active: false,
          id: "back-tab",
          href: "#back",
          dataName: "背",
        },
        {
          active: false,
          id: "hip-tab",
          href: "#hip",
          dataName: "臀部",
        },
        {
          active: false,
          id: "leg-tab",
          href: "#leg",
          dataName: "腿部",
        }                     
      ],
      shoulderVideo: [
        {
          link: shoulderVideo1,
          videolink: "https://www.youtube.com/embed/Pt9Qygw_Xu8",
          dataNum: "shoulder-tab1",
          linkNum: "#shoulder-tab1",
          videoName: "6 個最優的肩膀訓練動作 造出肌肥大三角肌 | 科學研究證實",
          show: true
        },
        {
          link: shoulderVideo2,
          videolink: "https://www.youtube.com/embed/wIgkWDK9DwU",
          dataNum: "shoulder-tab2",
          linkNum: "#shoulder-tab2",
          videoName: "大H | IFBB PRO 肩部訓練實錄 大H教你成為有肩膀的男人",
          show: false
        },
        {
          link: shoulderVideo3,
          videolink: "https://www.youtube.com/embed/bkpGezsmT0U",
          dataNum: "shoulder-tab3",
          linkNum: "#shoulder-tab3",
          videoName: "我認為肩膀必練的四個動作｜增肌系列 EP32",
          show: false
        },
        {
          link: shoulderVideo4,
          videolink: "https://www.youtube.com/embed/xWjCVTYONgk",
          dataNum: "shoulder-tab4",
          linkNum: "#shoulder-tab4",
          videoName: "第四部",
          show: false
        }
      ],
      armVideo: [
        {
          link: armVideo1,
          videolink: "https://www.youtube.com/embed/5S-JfYQ0iRY",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "最有效率增大手臂方式 ｜全新訓練模式 ft. Paul Gor",
          show: true
        },
        {
          link: armVideo2,
          videolink: "https://www.youtube.com/embed/Yy58aPnIwPI",
          dataNum: "selCurcle-tab1",
          linkNum: "#selCurcle-tab1",
          videoName: "手臂肌肥大訓練計畫｜My arms training routine｜增肌系列 EP14",
          show: false
        },
        {
          link: armVideo3,
          videolink: "https://www.youtube.com/embed/8TRJI7g3pD0",
          dataNum: "selCurcle-tab3",
          linkNum: "#selCurcle-tab3",
          videoName: "二三頭肌增大密技｜手臂訓練日｜2018年增肌課表 EP-01",
          show: false
        },
        {
          link: armVideo4,
          videolink: "https://www.youtube.com/embed/AlIVp5g9zKw",
          dataNum: "selCurcle-tab4",
          linkNum: "#selCurcle-tab4",
          videoName: "8分鐘的手臂訓練 (中文字幕)",
          show: false
        },
        {
          link: armVideo5,
          videolink: "https://www.youtube.com/embed/mY6LOJwj9qg",
          dataNum: "selCurcle-tab5",
          linkNum: "#selCurcle-tab5",
          videoName: "【館長教學】手臂訓練，背部輔助項",
          show: false
        }        
      ],
      chestVideo: [
        {
          link: shoulderVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "第一部",
          show: true
        },
        {
          link: shoulderVideo2,
          videolink: "https://www.youtube.com/embed/bauvNUJm2gA",
          dataNum: "selCurcle-tab1",
          linkNum: "#selCurcle-tab1",
          videoName: "第二部",
          show: false
        },
        {
          link: shoulderVideo3,
          videolink: "https://www.youtube.com/embed/tqDmiaoi3Xs",
          dataNum: "selCurcle-tab3",
          linkNum: "#selCurcle-tab3",
          videoName: "第三部",
          show: false
        },
        {
          link: shoulderVideo4,
          videolink: "https://www.youtube.com/embed/ZhwqfuA2GBI",
          dataNum: "selCurcle-tab4",
          linkNum: "#selCurcle-tab4",
          videoName: "第四部",
          show: false
        }
      ],
      bellyVideo: [
        {
          link: shoulderVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "第一部",
          show: true
        },          
      ],
      backVideo:[
        {
          link: shoulderVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "第一部",
          show: true
        },
        {
          link: shoulderVideo2,
          videolink: "https://www.youtube.com/embed/bauvNUJm2gA",
          dataNum: "selCurcle-tab1",
          linkNum: "#selCurcle-tab1",
          videoName: "第二部",
          show: false
        },
        {
          link: shoulderVideo3,
          videolink: "https://www.youtube.com/embed/tqDmiaoi3Xs",
          dataNum: "selCurcle-tab3",
          linkNum: "#selCurcle-tab3",
          videoName: "第三部",
          show: false
        },
        {
          link: shoulderVideo4,
          videolink: "https://www.youtube.com/embed/ZhwqfuA2GBI",
          dataNum: "selCurcle-tab4",
          linkNum: "#selCurcle-tab4",
          videoName: "第四部",
          show: false
        }        
      ],
      hipVideo:[
        {
          link: shoulderVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "第一部",
          show: false
        },        
      ],
      legVideo: [
        {
          link: shoulderVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "第一部",
          show: false        
        }
      ]
    };
  },
  methods: {
    trainEQ: function() {
      this.$emit("closeOther", this.homeOff);
    }
  }
};
</script>
<style scoped>
iframe{
  z-index: 1;
}
.row .nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-image: linear-gradient(to right, #EFA34B, #B90024) !important;
  border: transparent;
  color: #fff;
  /* height: 50%; */
}
.nav-link p {
  padding: 0;
  margin: 0;
}
.nav-link {
  padding: 0;
  border-radius: 3rem !important;
  margin: 1rem 1rem 0.5rem;
}
.menuPoint .nav-link {
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  border: .1rem solid gray;
  padding: .5rem 0;
  width: 200%;
}
.tab-pane img {
  width: 65%;
  height: 65%;
}
.myTab {
  padding: 1rem 1rem;
  height: 450px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #b90024;
  border-radius: 2rem;
}
.equipBG {
  z-index: -10;
}
.equip-BG1 {
  top: -5%;
  right: 0;
  width: 60%;
  height: 40%;
}
.equip-BG2 {
  left: -10%;
}
.listContent {
  background-color: rgba(238, 163, 75, 0.4);
  padding: 0.5rem;
  border-radius: 1rem;
}
.videoPlace {
  border: 1px solid #b90024;
  border-radius: 2rem;
  background-color: rgba(188, 17, 39, 0.8);
}
.col-6 col-sm-3 musclePic {
  z-index: -30;
  width: 20% !important;
  height: 100% !important;
}
.menuPoint{
  z-index: 10;
  /* width: 50%; */
  left: -3%;
}
@media screen and (max-width: 420px) {
  .before-resize{
    display: none;
  }
  .after-resized-menuBtn{
    position: fixed;
    left: 2%;;
    width: 3.5rem;
    height: 3.5rem;
    clip-path: circle(45% at 50% 50%);
    background: #EFA34B url('../assets/muscleMap/menu-after-resized.svg') no-repeat center;
    background-size: 40%;
    z-index: 11;
  }
  .after-resized-menuBtn:hover{
    animation: menuScale 1s infinite;
  }
  @keyframes menuScale {
    10%{
      background-size: 50%;
      background-color: #B90024;
    }
  }
  .after-resized-muscleMenu{
    top: 12.5%;
    width: 100%;
    background-color: #EFA34B;
    z-index: 12;
  }
  .menuPoint .nav-link {
    width: 95%;
  }
  .nav-pills .nav-link.active{
    background-image: linear-gradient(to right, #EFA34B, #B90024) !important;
  }
}
</style>


