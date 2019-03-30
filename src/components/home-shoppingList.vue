<template>
    <section id="onsale" class="page-section d-flex align-items-center row">
        <div class="col-12 d-flex mt-5 justify-content-center">
            <p class="aboutUs-title">主打<span>商品</span></p>
        </div>            
        <div class="container-fluid d-flex justify-content-center saleList">
            <div class="d-flex justify-content-center col-12">
                <ul class="nav nav-pills mb-3 w-100 justify-content-center" id="pills-tab" role="tablist">
                    <li v-for="titles in tabTitle" class="nav-item">
                        <a class="nav-link saleCate" :class="{active:titles.show}" :id="titles.tabId" data-toggle="pill" :href="titles.tabHref" role="tab">{{titles.tabName}}</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" id="nutrition-tab" data-toggle="pill" href="#nutrition" role="tab">健身食品</a>
                    </li> -->
                </ul>    
            </div>
            <p class='col-12 py-5 seeMore'>
                <a href="＃">看更多商品</a>
            </p>
            <div class="tab-content w-75" id="pills-tabContent">
                <div class="tab-pane fade show active" id="trainingCompo" role="tabpanel" aria-labelledby="trainingCompo-tab">
                    <div class="d-flex justify-content-around">
                        <div v-for="list1 in saleListEQ" class="col-3">
                            <div class="w-100 page-section__box">
                                <div class="page-section__img" :style="{ backgroundImage: 'url(' + list1.pic + ')' }"></div>
                                <div class="page-section__group w-100 my-4 text-left">
                                    <h3>{{list1.price}}</h3>
                                    <p>{{list1.productName}}</p>
                                    <div class="boxButtom">
                                        <hr>
                                        <img src="../assets/productDemo/logo.svg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="tab-pane fade w-100" id="nutrition" role="tabpanel" aria-labelledby="nutrition-tab">
                    <div class="d-flex justify-content-around">
                        <div v-for="list2 in saleListNu" class="d-flex flex-column px-2 page-section__box">
                            <div class="page-section__img" :style="list2.pic"></div>
                            <div class="page-section__group w-100 my-4 text-left">
                                <h3>{{list2.price}}</h3>
                                <p>{{list2.productName}}</p>
                                <div class="boxButtom">
                                    <hr>
                                    <img src="../assets/productDemo/logo.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>             
        </div>


        
    </section>
</template>
<script>
import onSaleList1 from '../assets/fitnessTool/健身手套.jpg'


export default {
    name: 'onSale',
    data(){
        return{
            tabTitle:[
                {
                    show: true,
                    tabId: 'trainingCompo-tab',
                    tabHref: '#trainingCompo',
                    tabName: '訓練部品'
                },
                {
                    show: false,
                    tabId: 'nutrition-tab',
                    tabHref: '#nutrition',
                    tabName: '健身食品'
                }                
            ]
            ,
            saleListEQ: [
                {
                    pic: onSaleList1,
                    price: '$400',
                    productName: '部品一'
                },
                {
                    pic: "background-image: url('../assets/fitnessTool/健身手套.jpg')",
                    price: '$200',
                    productName: '部品二'
                },  
                {
                    pic: "background-image: url('../assets/linkurl/productDemo/92055-6342_03.jpg')",
                    price: '$300',
                    productName: '部品一'
                },          
                {
                    pic: "background-image: url('../assets/linkurl/productDemo/92055-6342_04.jpg')",
                    price: '$400',
                    productName: '部品一'
                }                                   
            ],
            saleListNu: [
                {
                    pic: "background-image: url('../assets/linkurl/productDemo/92055-6342_01.jpg')",
                    price: '$400',
                    productName: '部品一'
                },
                {
                    pic: "background-image: url('../assets/linkurl/productDemo/92055-6342_02.jpg')",
                    price: '$200',
                    productName: '部品二'
                },  
                {
                    pic: "background-image: url('../assets/linkurl/productDemo/92055-6342_03.jpg')",
                    price: '$300',
                    productName: '部品一'
                },          
                {
                    pic: "background-image: url('../assets/linkurl/productDemo/92055-6342_01.jpg')",
                    price: '$200',
                    productName: '部品一'
                }   
            ]
        }
    }
    
}
</script>
<style>
    .saleList{
        margin: 2% 0;
    }
    .page-section__box{
        position: relative;
        width: 230px;
        padding: 0;
        border: 1px solid rgb(230, 230, 230)
    }
    .page-section__img{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 300px;
        cursor: pointer;
        transition: all .6s;
        transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
        border-radius: 1rem;
        /* background-color: red; */
        /* background-position: bottom; */
        background-repeat: no-repeat;
        background-position: center;
        background-size: 120%;
    }
    .page-section__img:hover{
        background-size: 135%;
    }
    .boxButtom{
        width: 10%;
    }
    .row .nav-pills .nav-link.saleCate.active,
    .nav-pills .show > .saleCate{
        background-image: linear-gradient(to right, #EFA34B, #B90024) !important;
    }  
    .nav-pills{
        margin: 0;
        margin-bottom: 0!important;
    }     
    .nav-link.saleCate{
        text-align: center;
        padding: 2rem 5rem;
        font-size: 1.5rem;
        color: gray !important;
        line-height: 1.3;
        margin: 0;
        border-radius: 0;
        border: .05rem solid rgba(26,8,42,.5);
    }
    #trainingCompo-tab{
        /* border-color: rgba(26,8,42,.5);
        border-style: solid;
        border-width: 1px; */
        border-top: .05rem solid rgba(26,8,42,.5);
        border-left: .05rem solid rgba(26,8,42,.5);
        border-bottom: .05rem solid rgba(26,8,42,.5);
        border-right: .05rem solid rgba(26,8,42,.5);
        border-radius: 2rem 0 0 2rem;
    }    
    #nutrition-tab{
        border-top: .05rem solid rgba(26,8,42,.5);
        border-bottom: .05rem solid rgba(26,8,42,.5);
        border-right: .05rem solid rgba(26,8,42,.5);
        border-radius: 0 2rem 2rem 0;
    }
</style>


