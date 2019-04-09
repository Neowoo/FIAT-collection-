<template>
    <section class="page-section page-section_footer d-flex align-items-center">
        <div class="before-resize_footer row w-100 h-100">
            <div class="col-1 offset-3 d-flex flex-column align-items-center">
                <img class="logo-footer" src="../assets/logo-white.svg">
            </div>
            <div class="row col-3">
                <ul class=" w-100 d-flex position-relative justify-content-between">
                    <li v-for="items in navData">
                        <a href="#">
                            {{items}}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-3 eddress">
                <p><img src="../assets/placeholder.svg">423-56 台中市東勢區東蘭路26-4號</p>
                <p style="margin-left: 1.5rem;">Email: wuhongyi2011@gmaill.com</p>
            </div>
        </div>

        <div class="after-resize_footer">
            <ul class="menuList">
                <li v-for="(menu, index) in navData" :key="index">
                    {{menu}}
                </li>
            </ul>
            <p>台中市東勢區東蘭路26-4號</p>
            <p class="email">Email: wuhongyi2011@gmaill.com</p>
            <ul class="socialList d-flex justify-content-around">
                <li v-for="(icons, index ) in social" :key="index">
                    <a :href="icons.href">
                        <img :src="icons.img" :alt="icons.alt">
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
import fblogo from '../assets/linkurl/fb.svg'
import linelogo from '../assets/linkurl/line.svg'
import instagramlogo from '../assets/linkurl/instagram.svg'
import twitter from '../assets/linkurl/twitter.svg'
export default {
    name: 'footer-compo',
    data(){
        return{
            navData: [
                '關於我們',
                '健身菜單',
                '健身教學',
                '健身好物'
`   `       ],
            social: [
                {
                    img: fblogo,
                    alt: 'facebook',
                    href: 'https://www.facebook.com/'
                },
                {
                    img: linelogo,
                    alt: 'line',
                    href: 'https://www.facebook.com/'
                },
                {
                    img: instagramlogo,
                    alt: 'instagram',
                    href: 'https://www.facebook.com/'
                },
                {
                    img: twitter,
                    alt: 'twitter',
                    href: 'https://www.facebook.com/'
                }
            ]
        }
    }
}
</script>
<style scoped>
@media screen and (max-width: 420px) {
    .before-resize_footer{
        display: none;
    }
    .after-resize_footer{
        margin-top: 20%;
        width: 100%;
        background-image: linear-gradient(to right, #EFA34B, #B90024);        
        color: #fff;
    }
    .after-resize_footer .menuList{
        margin-top: 15%;
        padding: 0;
    }
    .after-resize_footer .menuList li{
        margin-bottom: 2%;
    }
    .socialList{
        margin-top: 0;
        margin-bottom: 20%;
        padding: 0;
    }
    .socialList li{
        width: 10%;
    }
    .email{
        margin-bottom: 0;
    }
}
@media screen and (min-width: 420px) {
    .after-resize_footer{
        display: none;
    }
}
</style>

<style scoped>
    .before-resize_footer{
        background: url('../assets/purpleBG/footerBG.svg') no-repeat center;
        background-size: cover;
        min-height: 350px;
    }
    .logo-footer{
        width: 50%;
    }
    .page-section_footer div{
        min-height: 350px;
    }
    .page-section_footer div img{
        position: relative;
        top: 60%;
    }    
    .page-section_footer ul{
        top: 60%;
    }
    .page-section_footer ul li{
        list-style: none;
        font-size: 1rem;
    }
    .page-section_footer ul li a{
        color: #fff;
    }
    .page-section_footer ul li a:hover{
        text-decoration: none;
    }
    .page-section_footer .eddress img{
        left: -1rem;
        width: 3%;
        height: 3%;
    }
    .page-section_footer p{
        color: #fff;
    }
    .eddress p{
        position: relative;
        top: 60%;
    }

</style>

