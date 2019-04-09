<template>
    <section class=" page-section video py-lg-5 mt-5">
        <div class="row">
            <span class="position-absolute firstBG offset-6 col-2">
                <img src="../assets/BG-dumbell/dumbbell1.svg">
            </span>
        </div>
        <div class="container-fluid d-flex justify-content-center mt-5">
            <div class=" row tab-content d-flex justify-content-center" id="myTabContent">

                <div class="tab-pane fade show " :class="{active: video.show}"  :id="video.dataNum" role="tabpanel" :aria-labelledby="video.ariaLabelly" v-for='video in videoImg'>
                    <iframe width="1230" height="620" :src="video.videolink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </div>
            </div>
            <ul class="nav row justify-content-center" id="myTab" role="tablist">
                <li class="nav-item" v-for='video in videoImg'>
                    <a class="nav-link" :class="{active: video.show}" :id="video.dataNum" data-toggle="tab" :href="video.linkNum" role="tab" :aria-controls="video.dataNum" :aria-selected="video.ariaSelect">
                        <img :src="video.link">
                    </a>
                </li>
            </ul>            
        </div>
    </section>
</template>
<script>
import videoImg1 from '../assets/videoImg/curator.png'
import videoImg2 from '../assets/videoImg/Novice.png'
import videoImg3 from '../assets/videoImg/fourmove.png'
import videoImg4 from '../assets/videoImg/findMenu.png'
export default {
    name:'forAdVideo',
    data(){
        return{
            videoImg: [
                {
                    link: videoImg1,
                    videolink: 'https://www.youtube.com/embed/F6L_7Q_lCo4',
                    dataNum: 'tab2',
                    linkNum: '#tab2',
                    ariaLabelly:'tab2-tab',  
                    ariaSelect:'false',                  
                    show: true
                },
                {
                    link: videoImg2,
                    videolink: 'https://www.youtube.com/embed/bauvNUJm2gA',
                    dataNum: 'tab1',
                    linkNum:'#tab1',
                    ariaLabelly:'tab1-tab',
                    ariaSelect:'true',
                    show: false
                },
                {
                    link: videoImg3,
                    videolink: 'https://www.youtube.com/embed/tqDmiaoi3Xs',
                    dataNum: 'tab3',
                    linkNum: '#tab3',
                    ariaLabelly:'tab3-tab',    
                    ariaSelect:'false',                  
                    show: false
                },
                {
                    link: videoImg4,
                    videolink:'https://www.youtube.com/embed/ZhwqfuA2GBI',
                    dataNum: 'tab4',
                    linkNum: '#tab4',
                    ariaLabelly:'tab4-tab',   
                    ariaSelect:'false',                  
                    show: false
                }
            ]
        }
    }
}
</script>

<style>
    @media screen and (max-width: 420px){
        .video{
            display: none;
        }
    }
    .page-section .nav img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .firstBG{
        top: -20%;
    }
</style>

