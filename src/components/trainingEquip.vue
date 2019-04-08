<template>
  <section id="trainingEquip" class="page-section w-100 py-5 mt-5 mb-5">
    <div class="after-resized-menuBtn position-fixed" @click="showMenu = !showMenu"></div>
    <div
      v-show="showMenu"
      class="after-resized-equipMenu position-fixed nav nav-pills justify-content-center px-5"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        v-for="links in tabLinks"
        class="nav-link equipMenu"
        :class="{active: links.show}"
        :id="links.id"
        data-toggle="pill"
        :href="links.href"
        :data-tab-name="links.id"
        @click="showMenu = !showMenu"
      >{{links.name}}</a>
    </div>    
    <img class="equip-BG1 position-absolute equipBG" src="../assets/purpleBG/purpleBG6.png">
    <img class="equip-BG2 position-absolute equipBG" src="../assets/purpleBG/purpleBG7.png">
    <div class="row d-flex justify-content-center" style="margin-top: 10%;">
      <div
        class="before-resized-equipMenu position-fixed nav nav-pills justify-content-center px-5"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <a
          v-for="links in tabLinks"
          class="nav-link equipMenu"
          :class="{active: links.show}"
          :id="links.id"
          data-toggle="pill"
          :href="links.href"
          :data-tab-name="links.id"
        >{{links.name}}</a>
      </div>

      <div class="tab-content col-12 row" id="v-pills-tabContent" style="text-align: left;">
        <!-- 多功能器材 -->
        <div
          class="w-100 tab-pane fade show active"
          id="multiFunc"
          role="tabpanel"
          aria-labelledby="multiFunc-tab"
        >
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/1.jpg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid mt-5">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-12 col-sm-6 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="multFunc in multFuncVideo"
                  :class="{active: multFunc.show}"
                  :id="multFunc.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="multFunc.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class="col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item" v-for="multFunc in multFuncVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: multFunc.show}"
                    :id="multFunc.dataNum"
                    data-toggle="tab"
                    :href="multFunc.linkNum"
                    role="tab"
                  >
                    <div class="row listContent">
                      <img class="col-5" :src="multFunc.link">
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{multFunc.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 橢圓機 -->
        <div
          class="tab-pane w-100 fade"
          id="selfCircle"
          role="tabpanel"
          aria-labelledby="selfCircle-tab"
        >
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/橢圓機.jpg" alt>
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-sm-6 col-12 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="selfCircle in selfCircleVideo"
                  :class="{active: selfCircle.show}"
                  :id="selfCircle.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="selfCircle.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class=" col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item col-12" v-for="selfCircle in selfCircleVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: selfCircle.show}"
                    :id="selfCircle.dataNum"
                    data-toggle="tab"
                    :href="selfCircle.linkNum"
                    role="tab"
                  >
                    <!-- <span class="col-4"> -->
                    <!-- </span> -->
                    <div class="row listContent d-flex align-items-center">
                      <img class="col-5" :src="selfCircle.link">
                      <!-- <div class="col-7 d-flex align-items-center"> -->
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{selfCircle.videoName}}</p>
                      <!-- </div> -->
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 蝴蝶機 -->
        <div
          class="tab-pane w-100 fade"
          id="butterfly"
          role="tabpanel"
          aria-labelledby="butterfly-tab"
        >
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/蝴蝶機.jpg" alt>
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-sm-6 col-12 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="butterfly in butterflyVideo"
                  :class="{active: butterfly.show}"
                  :id="butterfly.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="butterfly.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class="col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item col-12" v-for="butterfly in butterflyVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: butterfly.show}"
                    :id="butterfly.dataNum"
                    data-toggle="tab"
                    :href="butterfly.linkNum"
                    role="tab"
                  >
                    <div class="row listContent d-flex align-items-center">
                      <img class="col-5" :src="butterfly.link">
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{butterfly.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="tab-pane w-100 fade"
          id="smithFrame"
          role="tabpanel"
          aria-labelledby="smithFrame-tab"
        >
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/史密斯架.jpg" alt>
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-sm-6 col-12 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="smithFrame in smithFrameVideo"
                  :class="{active: smithFrame.show}"
                  :id="smithFrame.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="smithFrame.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class="col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item col-12" v-for="smithFrame in smithFrameVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: smithFrame.show}"
                    :id="smithFrame.dataNum"
                    data-toggle="tab"
                    :href="smithFrame.linkNum"
                    role="tab"
                  >
                    <div class="row listContent d-flex align-items-center">
                      <img class="col-5" :src="smithFrame.link">
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{smithFrame.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="tab-pane w-100 fade"
          id="benchPress"
          role="tabpanel"
          aria-labelledby="benchPress-tab"
        >
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/臥推架.jpg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-sm-6 col-12 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="benchPress in benchPressVideo"
                  :class="{active: benchPress.show}"
                  :id="benchPress.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="benchPress.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class="col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item col-12" v-for="benchPress in benchPressVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: benchPress.show}"
                    :id="benchPress.dataNum"
                    data-toggle="tab"
                    :href="benchPress.linkNum"
                    role="tab"
                  >
                    <div class="row listContent d-flex align-items-center">
                      <img class="col-5" :src="benchPress.link">
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{benchPress.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="tab-pane w-100 fade"
          id="bellBench"
          role="tabpanel"
          aria-labelledby="bellBench-tab"
        >
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/啞鈴凳.jpg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-sm-6 col-12 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="bellBench in bellBenchVideo"
                  :class="{active: bellBench.show}"
                  :id="bellBench.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="bellBench.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class="col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item col-12" v-for="bellBench in bellBenchVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: bellBench.show}"
                    :id="bellBench.dataNum"
                    data-toggle="tab"
                    :href="bellBench.linkNum"
                    role="tab"
                  >
                    <div class="row listContent d-flex align-items-center">
                      <img class="col-5" :src="bellBench.link">
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{bellBench.videoName}}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tab-pane w-100 fade" id="lifter" role="tabpanel" aria-labelledby="lifter-tab">
          <div class="offset-sm-4 col-sm-4 col-7 offset-2">
            <img src="../assets/videoImg/forEquip/提踵器.jpg">
          </div>
          <div class="mt-5 col-12">
            <div class="row container-fluid">
              <div
                class="videoPlace p-4 mr-5 offset-sm-2 col-sm-6 col-12 tab-content d-flex justify-content-center align-items-center"
              >
                <div
                  class="tab-pane fade show embed-responsive embed-responsive-16by9"
                  v-for="lifter in lifterVideo"
                  :class="{active: lifter.show}"
                  :id="lifter.dataNum"
                  role="tabpanel"
                >
                  <iframe
                    :src="lifter.videolink"
                    frameborder="0"
                    allowfullscreen
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
              <ul class="col-sm-3 col-12 myTab" role="tablist">
                <li class="nav-item col-12" v-for="lifter in lifterVideo">
                  <a
                    class="videoList nav-link col-12"
                    :class="{active: lifter.show}"
                    :id="lifter.dataNum"
                    data-toggle="tab"
                    :href="lifter.linkNum"
                    role="tab"
                  >
                    <div class="row listContent d-flex align-items-center">
                      <img class="col-5" :src="lifter.link">
                      <p class="col-7 d-flex align-items-center" style="margin: 0;">{{lifter.videoName}}</p>
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
import navs from "../components/navbar";
import footers from "../components/footer";
import multiFuncVideo1 from "../assets/mini-equipPic/multiFunc/multFunc1.png";
import multiFuncVideo2 from "../assets/mini-equipPic/multiFunc/multFunc2.png";
import multiFuncVideo3 from "../assets/mini-equipPic/multiFunc/multFunc3.png";
import multiFuncVideo4 from "../assets/mini-equipPic/multiFunc/multFunc4.png";
import multiFuncVideo5 from "../assets/mini-equipPic/multiFunc/multFunc5.png";

import selfCircleVideo1 from "../assets/mini-equipPic/selfCircle/selfCircle1.png";
import selfCircleVideo2 from "../assets/mini-equipPic/selfCircle/selfCircle2.png";
import selfCircleVideo3 from "../assets/mini-equipPic/selfCircle/selfCircle3.png";
import selfCircleVideo4 from "../assets/mini-equipPic/selfCircle/selfCircle4.png";
import selfCircleVideo5 from "../assets/mini-equipPic/selfCircle/selfCircle5.png";
export default {
  name: "trainingEdu",
  components: {
    navs,
    footers
  },
  data() {
    return {
      showMenu: false,
      homeOff: false,
      tabLinks: [
        {
          show: true,
          id: "multiFunc-tab",
          href: "#multiFunc",
          name: "多功能訓練機"
        },
        {
          show: false,
          id: "selfCircle-tab",
          href: "#selfCircle",
          name: "滑步機"
        },
        {
          show: false,
          id: "butterfly-tab",
          href: "#butterfly",
          name: "蝴蝶機"
        },
        {
          show: false,
          id: "smithFrame-tab",
          href: "#smithFrame",
          name: "史密斯架"
        },
        {
          show: false,
          id: "benchPress-tab",
          href: "#benchPress",
          name: "臥推架"
        },
        {
          show: false,
          id: "bellBench-tab",
          href: "#bellBench",
          name: "啞鈴凳"
        },
        {
          show: false,
          id: "lifter-tab",
          href: "#lifter",
          name: "深蹲機"
        }
      ],
      multFuncVideo: [
        {
          link: multiFuncVideo1,
          videolink: "https://www.youtube.com/embed/tEN4Lnr0mXo",
          dataNum: "multiFunc-tab1",
          linkNum: "#multiFunc-tab1",
          videoName: "G5多功能複合訓練機使用介紹",
          show: true
        },
        {
          link: multiFuncVideo2,
          videolink: "https://www.youtube.com/embed/iVa62P02_dQ",
          dataNum: "multiFunc-tab2",
          linkNum: "#multiFunc-tab2",
          videoName: "基本器材使用 編號01",
          show: false
        },
        {
          link: multiFuncVideo3,
          videolink: "https://www.youtube.com/embed/wnduhGEx7Bg",
          dataNum: "multiFunc-tab3",
          linkNum: "#multiFunc-tab3",
          videoName: "雙軌滑索訓練機健身動作示範",
          show: false
        },
        {
          link: multiFuncVideo4,
          videolink: "https://www.youtube.com/embed/C9DZWvwWhmE",
          dataNum: "multiFunc-tab4",
          linkNum: "#multiFunc-tab4",
          videoName: "家用组合大型运动多功能健身器材 力量训练器械三人站综合训练器",
          show: false
        },
        {
          link: multiFuncVideo5,
          videolink: "https://www.youtube.com/embed/4RDwnFwP1Ds",
          dataNum: "multiFunc-tab5",
          linkNum: "#multiFunc-tab5",
          videoName: "【💪G64多功能訓練機💪】-神恩健身篇",
          show: false
        }
      ],
      selfCircleVideo: [
        {
          link: selfCircleVideo1,
          videolink: "https://www.youtube.com/embed/cn-Li30YWUE",
          dataNum: "selCurcle-tab1",
          linkNum: "#selCurcle-tab1",
          videoName: "如何正確使用橢圓機？專業教練Vic一次說明白 | BLADEZ",
          show: true
        },
        {
          link: selfCircleVideo2,
          videolink: "https://www.youtube.com/embed/IFXATtwlkCc",
          dataNum: "selCurcle-tab2",
          linkNum: "#selCurcle-tab2",
          videoName: "怎样让椭圆机燃脂效率更高？",
          show: false
        },
        {
          link: selfCircleVideo3,
          videolink: "https://www.youtube.com/embed/eN6dFAnxVWM",
          dataNum: "selCurcle-tab3",
          linkNum: "#selCurcle-tab3",
          videoName: "3招正確使用滑步機，燃脂安全又有效(Elliptical) | 康健陪你練",
          show: false
        },
        {
          link: selfCircleVideo4,
          videolink: "https://www.youtube.com/embed/cIAJ6sgsXgA",
          dataNum: "selCurcle-tab4",
          linkNum: "#selCurcle-tab4",
          videoName: "【宅妹】减脂期:我的椭圆机HIIT循环+肩部训练|松饼机试用",
          show: false
        },   
        {
          link: selfCircleVideo5,
          videolink: "https://www.youtube.com/embed/kDa1dKkZcuw",
          dataNum: "selCurcle-tab5",
          linkNum: "#selCurcle-tab5",
          videoName: "永和國民運動中心-新智教練-滑步機器材教學",
          show: false
        }                
      ],
      butterflyVideo: [
        {
          link: multiFuncVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "butterfly-tab2",
          linkNum: "#butterfly-tab2",
          videoName: "第一部",
          show: true
        }
      ],
      smithFrameVideo: [
        {
          link: multiFuncVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "butterfly-tab2",
          linkNum: "#butterfly-tab2",
          videoName: "第一部",
          show: true
        }
      ],
      benchPressVideo: [
        {
          link: multiFuncVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "butterfly-tab2",
          linkNum: "#butterfly-tab2",
          videoName: "第一部",
          show: true
        }
      ],
      bellBenchVideo: [
        {
          link: multiFuncVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "butterfly-tab2",
          linkNum: "#butterfly-tab2",
          videoName: "第一部",
          show: true
        }
      ],
      lifterVideo: [
        {
          link: multiFuncVideo1,
          videolink: "https://www.youtube.com/embed/F6L_7Q_lCo4",
          dataNum: "butterfly-tab2",
          linkNum: "#butterfly-tab2",
          videoName: "第一部",
          show: true
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
.row .nav-pills .nav-link.equipMenu.active,
.nav-pills .show > .equiMenu {
  background-image: linear-gradient(to right, #efa34b, #b90024) !important;
  color: #fff;
  border: transparent;
  /* height: 50%; */
}
.nav {
  flex-direction: column;
  left: 0%;
  /* width: 50%; */
  z-index: 10;
}
.nav-link p {
  padding: 0;
  margin: 0;
}
.nav-link {
  /* left: -2%; */
  border-radius: 3rem !important;
  margin: 1rem 1rem 0.5rem;
  padding: 0.5rem 1rem;
}
.videoList.nav-link {
  margin: 0 0 0.5rem;
  padding: 0;
}
.equipMenu.nav-link {
  border: 0.1rem solid gray;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
}
.tab-pane img {
  width: 100%;
  height: 100%;
}
.nav-item {
  margin-bottom: 1rem;
}
.myTab {
  list-style: none;
  padding: 1rem 1rem;
  height: 450px;
  overflow-y: scroll !important;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #b90024;
  border-radius: 2rem;
}
.listContent {
  background-color: rgba(255, 255, 255, 0.4);
  padding: 0.5rem;
  margin: 0;
  border-radius: 1rem;
}
.equipMenu {
  width: 19%;
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
.videoPlace {
  border: 1px solid #b90024;
  border-radius: 2rem;
  background-color: rgba(188, 17, 39, 0.8);
}
.listContent {
  background-color: rgba(238, 163, 75, 0.4);
  padding: 0.5rem;
  border-radius: 1rem;
}
@media screen and (max-width: 420px){
  .before-resized-equipMenu{
    display: none;
  }
  .after-resized-menuBtn{
    width: 3rem;
    left: 2%;
    height: 3rem;
    clip-path: circle(45% at 50% 50%);
    background: #efa34b url('../assets/muscleMap/menu-after-resized.svg') no-repeat center;
    background-size: 40%;
    z-index: 10;
  }
  .after-resized-menuBtn:hover{
    animation: menuScale 1s infinite;
  }
  @keyframes menuScale {
    10%{
      background-size: 50%;
      background-color: #b90024;
    }
  }
  .after-resized-equipMenu{
    background-color: #efa34b;
    width: 100%;
    top: 12.5%;
  }
  .nav-pills .nav-link.equipMenu.active{
    background-image: linear-gradient(to right, #efa34b, #b90024) !important;
  }
}
@media screen and (min-width: 420px) {
  .after-resized-equipMenu{
    display: none;
  }
}
</style>


