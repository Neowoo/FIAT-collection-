<template>
    <section id="foodMenu" class="page-section menu py-4 py-lg-5">
        <h3 class="aboutUs-title pt-5 pb-1 mt-5">熱量<span>菜單</span></h3>     
        <img class=" position-fixed w-50" style="left: 30%; top: 40%;" src="../assets/purpleBG/purpleBG4.svg">  
        <div class="col-12 d-flex justify-content-center" id="tabList">
            <ul class="nav nav-pills mb-3 col-7 position-fixed" id="pills-tab" role="tablist" style="overflow: scroll;height: 80vh; width: 10vw; left:5%; top: 15%;">
                <li v-for="foodCate in foodCates" class="nav-item">
                    <a class="nav-link" :class="{active: foodCate.active}" :id="foodCates.id" data-toggle="pill" :href="foodCate.href" role="tab" :aria-controls="foodCate.a_control">
                        <h4>{{foodCate.title}}</h4>
                        <img :src="foodCate.src">
                    </a>
                </li>                                                                                          
            </ul>
        </div>
        <div class="tab-content mt-5 offset-3 col-8" id="pills-tabContent">
            <div class="tab-pane w-100 fade show active" id="lunchBox" role="tabpanel" aria-labelledby="lunchBox-tab">
                <div class="row">
                    <div v-for="foodCont_lunchBox in foodConts_lunchBox" class="col-4 mb-5">
                        <div class="tab-pane-list p-2">
                            <img class="menuPic" :src="foodCont_lunchBox.src">
                            <hr>
                            <div class="row">
                                <span class="col-3 offset-1"></span>
                                <div class="col-8 m-0">
                                    <h4 class="col-12 text-center">{{foodCont_lunchBox.mealName}}</h4>
                                    <p class="col-12 text-center">熱量： {{foodCont_lunchBox.kcal}} 大卡</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane w-100 fade" id="noodle" role="tabpanel" aria-labelledby="noodle-tab">
                <div class="row">
                    <div v-for="foodCont_noodle in foodConts_noodle" class="col-4 mb-5">
                        <div class="tab-pane-list p-2">
                            <img class="menuPic" :src="foodCont_noodle.src">
                            <hr>
                            <div class="row">
                                <span class="col-3 offset-1"></span>
                                <div class="col-8 m-0">
                                    <h4 class="col-12 text-center">{{foodCont_noodle.mealName}}</h4>
                                    <p class="col-12 text-center">熱量： {{foodCont_noodle.kcal}} 大卡</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
            <!-- <div class="tab-pane fade" id="noodle" role="tabpanel" aria-labelledby="noodle-tab">

            </div>
            <div class="tab-pane fade" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">

            </div> -->
        </div>    
    </section>
</template>
<script>
    import lunchBox from '../assets/foodMenu/熱量表-便當.jpg'
    import noodle from '../assets/foodMenu/熱量表-麵類.jpg'
    import breakfast from '../assets/foodMenu/熱量表-早餐.jpg'
    import westernFood from '../assets/foodMenu/熱量表-西餐.jpg'
    import japanFood from '../assets/foodMenu/熱量表-日式料理(丼飯、咖哩飯、拉麵).png';

    // 便當
    import friedCKBox from '../assets/foodMenu/foodList/炸雞腿便當.jpg'
    import luCKBox from '../assets/foodMenu/foodList/滷雞腿便當.jpg'
    import luBunCKBox from '../assets/foodMenu/foodList/滷棒腿便當.jpg'
    import pieguBox from '../assets/foodMenu/foodList/排骨便當.webp'
    import friedFishBox from '../assets/foodMenu/foodList/炸魚排便當.jpg'
    import luPieguBox from '../assets/foodMenu/foodList/滷排骨便當.jpg'
    import soyPorkBox from '../assets/foodMenu/foodList/爌肉便當.jpg'

    // 麵
    import yangChunNoodle from '../assets/foodMenu/foodList/陽春麵.jpg'
    import yangChunDryNoodle from '../assets/foodMenu/foodList/陽春乾麵.jpg'
    import majunNoodle from '../assets/foodMenu/foodList/麻醬麵.jpg'
    import zajunNoodle from '../assets/foodMenu/foodList/炸醬麵.jpg'
    import ravioliNoodle from '../assets/foodMenu/foodList/餛飩麵.jpg'
    import mustardPorkNoodle from '../assets/foodMenu/foodList/榨菜肉絲麵.jpg'
    import zogunNoodle from '../assets/foodMenu/foodList/肉羹麵.jpg'
    import beefNoodle from '../assets/foodMenu/foodList/牛肉麵.jpg'
    
    export default {
        neme: 'menu',
        data(){
            return{
               foodCates: [
                    {
                        active: true,
                        id: 'lunchBox-tab',
                        href: '#lunchBox',
                        a_control: 'lunchBox',
                        title: '便當類',
                        src: lunchBox
                    },
                    {
                        active: false,
                        id: 'noodle-tab',
                        href: '#noodle',
                        a_control: 'noodle',
                        title: '麵類',
                        src: noodle
                        
                    },
                    {
                        active: false,
                        id: 'breakfast-tab',
                        href: '#breakfast',
                        a_control: 'breakfast',
                        title: '早餐類',
                        src: breakfast
                    },
                    {
                        active: false,
                        id: 'western-food-tab',
                        href: '#western-food',
                        a_control: 'western-food',
                        title: '西餐類',
                        src: westernFood
                    },
                    {
                        active: false,
                        id: 'japanFood-tab',
                        href: '#japanFood',
                        a_control: 'japanFood',
                        title: '日式料理',
                        src: japanFood
                    }
                ],
               foodConts_lunchBox: [
                    {
                        src: friedCKBox,
                        mealName: '炸雞腿便當',
                        kcal: '950'
                    },
                    {
                        src: luCKBox,
                        mealName: '滷雞腿便當',
                        kcal: '800'
                    },
                    {
                        src: luBunCKBox,
                        mealName: '滷棒腿便當',
                        kcal: '650'
                    },
                    {
                        src: pieguBox,
                        mealName: '炸排骨便當',
                        kcal: '1050'
                    },
                    {
                        src: friedFishBox,
                        mealName: '炸魚排便當',
                        kcal: '1150'
                    },
                    {
                        src: luPieguBox,
                        mealName: '滷排骨便當',
                        kcal: 1050
                    },
                    {
                        src: soyPorkBox,
                        mealName: '爌肉便當',
                        kcal: 900
                    }
               ],
               foodConts_noodle: [
                   {
                       src: yangChunNoodle,
                       mealName: '陽春麵',
                       kcal: 350
                   },
                   {
                       src: yangChunDryNoodle,
                       mealName: '陽春乾麵',
                       kcal: 425
                   },
                   {
                       src: majunNoodle,
                       mealName: '麻醬麵',
                       kcal: 500
                   },
                   {
                       src: zajunNoodle,
                       mealName: '炸醬麵',
                       kcal: 650
                   },
                   {
                       src: ravioliNoodle,
                       mealName: '餛飩麵',
                       kcal: 550
                   },
                   {
                       src: mustardPorkNoodle,
                       mealName: '榨菜肉絲湯麵',
                       kcal: 400
                   },
                   {
                       src: zogunNoodle,
                       mealName: '肉羹麵',
                       kcal: 700
                   },
                   {
                       src: beefNoodle,
                       mealName: '牛肉麵',
                       kcal: 800
                   }
               ]
            }
        },
        methods: {

        },
    }
</script>
<style scoped>
    /* part1 */

    #tabList{
        z-index: 1;
    }
    .slogan{
        font-size: .5rem;
        color: #B90024;
        font-weight: bold;
    }
    .menuList p{
        padding-top: 0;
    }
    .menuList img{
        width: 80%;
    }
    .page-section.menu .menuBG1{
        z-index: -100;        
        left: 40%;
        top: 30%;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
    color: black;
    /* background-image: linear-gradient(to right, #EFA34B, #B90024); */
    background-color: white;
    }
    .nav-pills .nav-link{
        color: white;
        padding: 1rem .5rem;
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 1rem;
        
    }
    .nav-pills{
        background-image: linear-gradient(to right, #EFA34B, #B90024);
        padding: 1rem;
        border-radius: 2rem;
    }
    .nav-item{
        width: 100%;
        height: 20%;
        margin: 1rem 0;
    }
    .tab-pane-list{
        border: 1px solid rgb(230, 230, 230);
        background-color: rgba(255, 255, 255, .6);
    }
    .tab-pane-list span{
        background: url('../assets/bgLogo.svg') no-repeat right top;
        background-size: 80%;
    }
    .menuPic{
        width: 95%; 
        height: 15rem;
    }
</style>


