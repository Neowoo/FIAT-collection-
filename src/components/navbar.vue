<template>
    <div id="nav" class="position-fixed">
        <div class="container-fluid flex-row">
            <eva-icon @click="menuHide = !menuHide" class="after-resize-menu position-fixed" name="menu" animation="pulse" fill="#fff"></eva-icon>
            <div class="home-page-1stlogo">
                <router-link tag='div' :to="{name: 'home'}" class=" d-flex justify-content-center align-items-center">
                    <!-- <img id='homeLogo' src="../assets/logo.svg" alt="FIAT"> -->
                    <div id="homeLogo"></div>
                </router-link> 
            </div>
            <ul class="navbarUl justify-content-around">
                <router-link  tag="li" class=" navbarLi" :to='{name: "home", hash: "#aboutUs"}'>
                    <p>關於我們</p>  
                </router-link>
                <router-link  tag="li" class="navbarLi" :to='{name: "home", hash: "#foodMenu"}'>
                    <p>熱量飲食</p>
                </router-link>                    
                <router-link  tag="li" class="navbarLi" :to='{name: "home", hash: "#trainingEdu"}'>
                    <p>健身教學</p>
                </router-link>       
                <router-link  tag="li" class="navbarLi" :to='{name: "home", hash: "#onsale"}'>
                    <p>健身好物</p>
                </router-link> 
            </ul>

            <!-- <div class="page-header_button ml-auto">
                <b-button class="btn" v-b-modal.logIn>{{loginBtn}}</b-button>
            </div>  
            <div>
                <b-modal id="logIn" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                </b-modal>
            </div> -->
            <!-- <div class="page-header_button"> -->
                <!-- 登入後圖示 -->
                <div v-if='logDone' class="after-resize_menu pl-3">
                    <div class="trylog d-flex align-items-center justify-content-center">
                        <eva-icon name="person-done" width='65%' height='65%' animation="pulse" fill="orange"></eva-icon>
                    </div>
                </div>

                <b-button v-if="!logDone" class="after-resize_button position-relative navSignIn" v-b-modal.signIn>{{loginBtn}}</b-button>

                <!-- Modal1 Component -->
                <b-modal v-if="!logDone" id="signIn" ok-title='登入' cancel-title='取消' centered title="登入會員" v-b-modal.modalPrevent @ok='login'>
                    <b-form>
                        <b-form-group class="my-4" label='帳號(信箱)：' label-cols-sm="3">
                            <b-form-input class="col-8" v-model="logInEmail"></b-form-input>
                        </b-form-group>   
                        <b-form-group class="mb-4" label='密碼：' label-cols-sm="3">
                            <b-form-input class="col-8" type='password' v-model="logInPassword"></b-form-input>
                        </b-form-group>      
                        <p v-if='key_wrong'>※錯誤！請重新輸入</p>
                        
                        <div class="d-flex justify-content-center">
                            <b-button variant="link" class=" text-right signUp" @click="signUpOk = true" v-b-modal.signUp>
                                {{signUpBtn}}<eva-icon name='person-add' fill='orangered'></eva-icon>
                            </b-button>                       
                        </div>
                    </b-form>
                </b-modal>

                <b-modal id="signUp" v-if="signUpOk" ok-title='註冊' cancel-title='取消' centered title='註冊會員' @ok='signUp'>
                    <div class="row">
                        <div class="col-6">
                            <b-form-group class="my-4" label='姓：' label-cols-sm="2">
                                <b-form-input class="col-12"></b-form-input>
                            </b-form-group> 
                        </div>
                        <div class="col-6">
                            <b-form-group class="my-4" label='名：' label-cols-sm="2">
                                <b-form-input class="col-12"></b-form-input>
                            </b-form-group>                     
                        </div>
                    </div>
                    <b-form-group class="my-4" label='帳號(信箱)：' label-cols-sm="3" >
                        <b-form-input id='signUpEmail' class="col-8" @blur="$v.signUpEmail.$touch()" v-model="signUpEmail" :class='{invalid: $v.signUpEmail.$error}'></b-form-input>
                        <p class='validInfo' v-if="!$v.signUpEmail.email">請輸入正確email格式</p>
                    </b-form-group>   
                    <b-form-group class="mb-4" label='密碼：' label-cols-sm="3" >
                        <b-form-input class="col-8" type='password' v-model="signUpPassword" @blur="$v.signUpPassword.$touch()" :class='{invalid: $v.signUpPassword.$error}'></b-form-input>
                        <p class='validInfo' v-if="!$v.signUpPassword.minLen">請輸入 {{ $v.signUpPassword.$params.minLen.min }} 位數字及英文字母</p>
                    </b-form-group>                          
                    <b-form-group class="mb-4" label='確認：' label-cols-sm="3">
                        <b-form-input class="col-8" type='password' v-model="signUpConfirm" @blur="$v.signUpConfirm.$touch()" :class='{invalid: $v.signUpConfirm.$error}'></b-form-input>
                    </b-form-group>                      
                </b-modal>
                <!-- <b-modal></b-modal> -->
            <!-- </div> -->

            <div class="mail-send-area ml-auto text-center">
                <form id="sendMail">
                    
                    <div class=" d-flex justify-content-end">
                        <svg class="ml-auto" id="mail-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.5 23">
                            <g id="mail_text" data-name="mail text" transform="translate(0.476 0)">
                                <g id="mail" transform="translate(18.308)">
                                    <path id="Path_8" data-name="Path 8" class="cls-1" d="M35.507,10.787h-25c-3.929,0-5,2.079-5,4v14c0,2.921,3.08,5,6,5h23a4.809,4.809,0,0,0,5-5v-14C39.507,12.867,39.437,10.787,35.507,10.787Zm-25,2h25a2.08,2.08,0,0,1,2,1c-2.106,2.073-8.794,8.848-11,11a8.422,8.422,0,0,1-4,2c-.674,0-1.86-.886-3-2-2.206-2.152-8.893-8.927-11-11A2.08,2.08,0,0,1,10.507,12.787Zm-3,2h0c1.908,1.879,6.213,6.264,9,9l-8,7a2.96,2.96,0,0,1-1-2Zm4,17a6.358,6.358,0,0,1-2,0l8-7c.586.575.639.649,1,1a6.364,6.364,0,0,0,4,2,6.358,6.358,0,0,0,4-2c.361-.351,1.414-.424,2-1l8,7a6.391,6.391,0,0,1-2,0Zm27-3a2.96,2.96,0,0,1-1,2l-8-7c2.786-2.736,7.092-7.121,9-9h0Z" transform="translate(-5.791 -10.787)"/>
                                </g>
                                <path id="Path_9" data-name="Path 9" class="cls-2" d="M-.476.355h17" transform="translate(0 4.145)"/>
                                <line id="Line_1" data-name="Line 1" class="cls-2" x2="14" transform="translate(2.524 8.5)"/>
                                <line id="Line_1-2" data-name="Line 1" class="cls-2" x2="10" transform="translate(6.524 13.5)"/>
                            </g>
                        </svg>
                        <input type="text" placeholder='輸入您的email' class="form-input">
                    </div>
                    <button type="submit" class=" ml-auto form-input-btn d-inline-block">
                        {{sendMail}}
                        <img src="../assets/papperPlane.svg">
                    </button>
                    <p></p>
                </form>
            </div>     
        </div>

        <div v-show="menuHide" class="row menu-scroll-hide">
            <b-button v-if="!logDone" class="navSignIn" v-b-modal.signIn>{{loginBtn}}</b-button>
            <div class="col-12" @click="menuHide = !menuHide" >
                <router-link tag="li" class=" navbarLi" :to='{name: "home", hash: "#aboutUs"}'>
                    關於我們
                </router-link>                
            </div>
            <div class="col-12" @click="menuHide = !menuHide" >
                <router-link tag="li" class="navbarLi" :to='{name: "home", hash: "#foodMenu"}'>
                    熱量飲食
                </router-link>                 
            </div>
            <div class="col-12" @click="menuHide = !menuHide" >
                <router-link tag="li" class="navbarLi" :to='{name: "home", hash: "#trainingEdu"}'>
                    健身教學
                </router-link>                
            </div>
        </div>
    </div>
</template>
<script>
import axios from '../../src/signUpAxios.js'
import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

export default {
    name: 'Opening',
    data(){
        return{
            menuHide: false,
            scrolled: true,
            logDone: false,
            key_wrong: false,
            loginBtn: '登入',
            signUpBtn: '還沒有帳號？',
            trainingBtn: '開始訓練',
            sendMail: '取得最新訊息',
            navData: [
                {
                    text: '關於我們',
                    linked: '#aboutUs',
                    isSelect: false                
                },
                {
                    text: '健身菜單',
                    linked: '#foodMenu',
                    isSelect: false
                },
                {
                    text: '健身教學',
                    linked: '#trainingEdu',
                    clickEff: 'navTrainChange',
                    isSelect: false
                }
                ,
                {
                    text: '健身好物',
                    isSelect: false
                }
                ,
                {
                    text: '健肥社群'
                }
                ,
                {
                    text: '登入',
                    isSelect: false,
                    loginClick: false
                },                
            ],
            show: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpConfirm: '',
            signUpOk: true,
            logInEmail: '',
            logInPassword: '',
        }
    },
    computed:{
      state:() => {
        return this.name.length >= 4 ? true : false
      },
      invalidFeedback:() => {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback:() => {
        return this.state === true ? 'Thank you' : ''
      }
    },
    created(){
        window.addEventListener("scroll", function(){
        var y = window.scrollY;
        if(y > 250){
            document.getElementById('nav').classList.add('scrolled');
            document.getElementById('mail-icon').classList.add('cls-scroll')
            document.getElementById('sendMail').classList.add('mail-scroll')
        } else {
            document.getElementById('nav').classList.remove('scrolled');
            document.getElementById('mail-icon').classList.remove('cls-scroll')
            document.getElementById('sendMail').classList.remove('mail-scroll')
        }
      });
    },
    validations:{
        signUpEmail:{
            required,
            email
        },
        signUpPassword: {
            required,
            minLen: minLength(6)
        },
        signUpConfirm: {
            required,
            sameAs: sameAs('signUpPassword')
        }
    },
    methods: {
        login(evt){
             const logInData = {
                 logInEmail: this.logInEmail,
                 logInPassword: this.logInPassword
             }
             evt.preventDefault();
             axios.post('/verifyPassword?key=AIzaSyAr7sqm-7JNNnHTNv2IzF-gU3c1VTciEoU', {
                 email: logInData.logInEmail,
                 password: logInData.logInPassword,
                 returnSecureToken: true
             })
             .then(res => {
                 console.log(res);
                 this.logDone = true;
                })
             .catch(err => {
                 console.log(err);
                 this.key_wrong = !this.key_wrong;
                })
        },
        signUp(evt){
            evt.preventDefault();
            const formData = {
            signUpEmail: this.signUpEmail,
            signUpPassword: this.signUpPassword,
            signUpConfirm: this.signUpConfirm,
            }

            axios.post('/signupNewUser?key=AIzaSyAr7sqm-7JNNnHTNv2IzF-gU3c1VTciEoU', {
            email: formData.signUpEmail,
            password: formData.signUpPassword,
            returnSecureToken: true
            })            
            .then(res => {
                console.log(res)
                alert('signup ok!');
                this.signUpOk = false;
            })
            .catch(err => console.log(err))
        }
    }
}
</script>
<style scope>
    #nav{
        display: block;
        padding-right: 5rem;
        padding-left: 5rem;
        margin: 0 auto;
        top: -3%;
        right: 0;
        left: 0;
        z-index: 30;
    }
    #nav::before{
        content: "";
        position: fixed;
        padding: 3.5rem 1rem;
        left: 0;
        right: 0;
        z-index: -1;
        background-color: #fff;
        transform: scaleY(0);
        transform-origin: center top;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.176) 0px 0.5rem 1rem;   
        transition: all 0.6s cubic-bezier(0.215, 0.6, 0.355, 1) 0.1s;        
    }

    #nav.scrolled::before{
        transform: scaleY(1);
        transition: all 0.6s cubic-bezier(0.215, 0.6, 0.355, 1) 0.1s;
    }

    .container-fluid{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    #homeLogo{
        margin: auto;
        width: 80px;
        height: 60px;
        float: left;
        background: url('../assets/logo.svg') no-repeat center;
        background-size: contain;
    }

    ul.navbarUl{
        display: flex;
        width: 30%;
        flex-flow: row wrap;
        text-align: center;
    }

    .navbarLi{
        display: list-item;
        list-style: none;
        padding: 14px 10px;
        font-size: 1em;
        font-weight: 500;
    }
    .navbarLi p{
        padding: 2px 0;
        margin: 0;
    }
    .navbarLi p:hover{
        color: #B90024;
    }

    @media only screen and (max-width: 420px){
        .after-resize-menu{
            right: 10%;
        }
        #nav{
            top: 0%;
            padding: .8rem 0;
            background-image: linear-gradient(to bottom, #EFA34B, #B90024);
            /* background-color: #CE3E33; */
        }
        #nav::before{
            display: none
        }
        .navbarUl{
            display: none !important;
        }
        .home-page-1stlogo{
            width: 100%;
        }
        #homeLogo{
            width: 160px;
            background: url('../assets/logo-color-homepage.png') no-repeat center !important;
            background-size: cover;
        }
        .btn.navSignIn{
            width: 100%;
            left: 0;
        }
        .mail-send-area{
            display: none !important;
        }
        .after-resize_button{
            display: none !important;
        }
    }
    @media only screen and (min-width: 420px){
        .after-resize-menu{
            display: none !important;
        }
    }

    .page-header_button{
        display: block;
        margin-left: 15%;
    }
    .btn{
        display: block;
        min-width: 7rem;
        padding: .5rem 1.5rem !important;
        text-decoration: none;
        font-weight: 600;
        color: #fff;
        border-radius: 2rem !important;
        line-height: 1.5;
        letter-spacing: .25rem;
        text-indent: .25rem;
        font-size: 1rem !important;
        border-color: transparent !important;
    }
    .text-center{
        text-align: center;
    }
    input{
        display: inline-block;
        border-color: transparent;
        border-width: 2px;
        padding: 8px 16px;
        background-color: transparent;

    }
    .form-input{
        padding: .5rem 1rem;
        font-size: .875rem;
    }

    #sendMail{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }
    #sendMail input::placeholder,
    #sendMail input{
        color: #fff;
    }
    .text-center img{
        width: 60px;
        height: 60px;
    }
    .form-input-btn{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        cursor: pointer;
        color: rgb(206, 62, 51);
        background-color: #fff;
        box-shadow: 0 5px 23px 0 hsla(0,0%,88%,.12);
        font-weight: 500;
        font-size: .875rem;
        padding: .875rem 1.25rem;
        border-radius: 1.75rem;
    }

    .form-input-btn img{
        margin-left: .5rem;
        width: 1.5rem;
        height: 1.5rem;
    }

    @media (min-width: 1200px) {
        .pl-xl-5{
            padding-left: 3rem;
        }
    }
    #nav .navbarLi {
        cursor: pointer;
        color: black;
    }
    .btn.navSignIn{
        background-image: linear-gradient(to right, #EFA34B, #B90024);
        left: 15%;
    }
    .btn.signUp.btn-link{
        color: black;
    }
    .btn.signUp.btn-link:hover{
        color: orange;
        text-decoration: none !important;
    }
    #signIn___BV_modal_header_{
        background-image: linear-gradient(to right, #EFA34B, #B90024);
        color: #fff;
    }
    .btn.btn-primary{
        background-image: linear-gradient(to right, #EFA34B, #B90024);
        color: #fff;        
    }
    .trylog{
        background: rgb(206, 62, 51);
        position: relative;
        /* left: 35%; */
        width: 15%;
        clip-path: circle(50% at 50% 50%);
        cursor: pointer;
    }
    .trylog:before{
        content: "";
        display: block;
        padding-top: 100%; 	/* initial ratio of 1:1*/
    }   
    #signIn___BV_modal_body_{
        background: url('../assets/logo.svg') no-repeat 95% 35%;
        background-size: 20%;
    } 
    .cls-1 {
    fill: #fff;
    }

    .cls-2 {
    fill: none;
    stroke: #fff;
    }   
    .cls-scroll .cls-2{
        stroke: rgb(206, 62, 51);
    }
    .cls-scroll .cls-1{
        fill: rgb(206, 62, 51);
    }
    #mail-icon{
        width: 15%;
        /* height: 15%; */

        /* margin-left: 100%; */
    }
    #sendMail.mail-scroll input::placeholder,
    #sendMail.mail-scroll input{
        color: rgb(206, 62, 51);
    }
    .menu-scroll-hide .navbarLi{
        background-color: #fff;
        border-top: .1rem solid rgba(240, 240, 240, .8);
    }
    .invalid{
        background-color: #f7cfcf !important;
        border: 1px solid red !important;
    }
    .validInfo{
        font-size: .8rem;
        text-align: left;
    }    

</style>



