<template>
    <aside class="page-aside m-0 justify-content-center d-flex">
        <ul class="page-aside_list align-items-center">
            <li v-for='item in socialIcons' :key="item.imgName">
                <a :href="item.href"><img :src='item.img' :alt="item.alt"></a>
            </li>
        </ul>
    </aside>
</template>
<script>
import fblogo from '../assets/linkurl/fb.svg'
import linelogo from '../assets/linkurl/line.svg'
import instagramlogo from '../assets/linkurl/instagram.svg'
import twitter from '../assets/linkurl/twitter.svg'

export default {
    name: 'theMainOpen',
    data(){
        return{
            imgs: '../assets/fb.svg',
            socialIcons: [
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
    },
    methods: {
    imgName: function(img){
        var imgPath = '../assets/' + img + '.svg';
        return imgPath;
    }
    }

}
</script>
<style>
    @media only screen and (max-width: 420px){
        .page-aside{
            display: none !important;
        }
    }
    aside{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 50%;
        justify-content: center;
    }
    aside img{
        width: 3rem;
        height: 3rem;
    }
    aside li{
        list-style: none;
        margin: 10px 0;
    }

    .page-aside{
        position:fixed;
        z-index: 1030;
        height: 100%;
        padding: .5rem;
        right: .25rem;
        
    }

    .page-aside_list{
        padding: .5rem;
        border-width: 2px;
        background-color: rgba(255, 255, 255, 0.8);
        border: 2px solid #B90024;
        border-radius: 2rem;
    }

    .align-items-center{
        align-items: center;
    }
    
    .m-0{
        margin: 0;
    }

    ul{
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-end: 0;
        margin-inline-end: 0;
    }
</style>


