<template>
  <aside
    class="page-aside ml-auto d-flex flex-column justify-content-center d-flex align-items-end mr-2"
  >
    <ul class="page-aside_list align-items-center w-25">
      <!-- <li v-for='item in socialIcons' :key="item.imgName">
                <a :href="item.href"><img :src='item.img' :alt="item.alt"></a>
      </li>-->
      <li>
        <a href="https://www.facebook.com/hongyi.wu.18" target='_blank'>
          <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <g id="fb" transform="translate(0.077 0.385)">
              <path
                id="Path_13"
                data-name="Path 13"
                class="fb-config"
                d="M29.923,14.755c0,7.18-4.282,13.47-11,15v-12h3v-5h-4c0-1.795,1.131-4,3-4,.749,0,1.513.851,2,1v-5a13.238,13.238,0,0,0-3,0,7.492,7.492,0,0,0-5,2c-1.646,1.5-2,3.794-2,6h-3v5h3v12a15.427,15.427,0,0,1-13-15,15,15,0,1,1,30,0Z"
                transform="translate(0 -0.14)"
              ></path>
            </g>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/wuhongyi2010/" target='_blank'>
          <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31">
            <g id="instagram" transform="translate(0.077 0.398)">
              <g id="Group_7" data-name="Group 7">
                <g id="Group_6" data-name="Group 6">
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    class="inst-config"
                    d="M14.923-.4a14.934,14.934,0,0,0-15,15c0,8.336,6.664,16,15,16s15-7.664,15-16A14.932,14.932,0,0,0,14.923-.4Zm10,24a1.352,1.352,0,0,1-1,1h-18c-.375,0,0-.623,0-1V6.6c0-.375-.377-1,0-1h18a1.352,1.352,0,0,1,1,1Zm-14-9c0-2.084,1.916-3,4-3s4,.916,4,3a4.172,4.172,0,0,1-4,4A4.172,4.172,0,0,1,10.923,14.6Zm8-7h4v4h-4Zm2,7h2v8h-15v-8h2c-.08.379,0-.4,0,0,0,3.1,1.905,6,5,6a6.3,6.3,0,0,0,6-6C20.921,14.2,21,14.981,20.923,14.6Z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/%E5%BC%98%E6%AF%85-%E5%B7%AB-64b858184/" target='_blank'>
          <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path
              id="Path_301"
              data-name="Path 301"
              class="linkedin-config"
              d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0ZM11.25,22.266H7.5V9.141h3.75ZM9.491,8.336A1.759,1.759,0,1,1,11.25,6.577,1.757,1.757,0,0,1,9.491,8.336ZM24.375,22.266h-3.75V14.151c0-.951-.272-1.616-1.44-1.616a2.249,2.249,0,0,0-2.31,1.616v8.115h-3.75V9.141h3.75v1.254a6.272,6.272,0,0,1,3.75-1.253c1.215,0,3.75.727,3.75,5.122v8Z"
            ></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target='_blank'>
          <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path
              id="Path_21"
              data-name="Path 21"
              class="twitter-config"
              d="M14.923.128a15,15,0,1,0,15,15A14.933,14.933,0,0,0,14.923.128Zm9,11c.009.192,0-.194,0,0,0,5.915-4.767,13-13,13a13.136,13.136,0,0,1-7-2,8.06,8.06,0,0,0,1,0,10.364,10.364,0,0,0,6-2,4.159,4.159,0,0,1-4-3,6.4,6.4,0,0,0,1,0,3.277,3.277,0,0,0,1,0,5.573,5.573,0,0,1-4-5c0-.019,0,.019,0,0,.6.335,1.266.977,2,1a4.991,4.991,0,0,1-2-4c0-.82.615-1.339,1-2a12.575,12.575,0,0,0,9,5,4.382,4.382,0,0,1,0-1c0-2.472,1.528-5,4-5a6.929,6.929,0,0,1,4,2c1.02-.2,1.135-1.487,2-2-.334,1.045-.076,2.446-1,3,.905-.108,1.2-.644,2-1C25.323,9.026,24.8,10.5,23.923,11.128Z"
              transform="translate(0)"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </aside>
</template>
<script>
import fblogo from "../assets/linkurl/fb.svg";
import linelogo from "../assets/linkurl/line.svg";
import instagramlogo from "../assets/linkurl/instagram.svg";
import twitter from "../assets/linkurl/twitter.svg";

export default {
  name: "theMainOpen",
  data() {
    return {
      imgs: "../assets/fb.svg",
      socialIcons: [
        {
          img: fblogo,
          alt: "facebook",
          href: "https://www.facebook.com/"
        },
        {
          img: linelogo,
          alt: "line",
          href: "https://www.facebook.com/"
        },
        {
          img: instagramlogo,
          alt: "instagram",
          href: "https://www.facebook.com/"
        },
        {
          img: twitter,
          alt: "twitter",
          href: "https://www.facebook.com/"
        }
      ]
    };
  },
  methods: {
    imgName: function(img) {
      var imgPath = "../assets/" + img + ".svg";
      return imgPath;
    }
  }
};
</script>
<style>
@media only screen and (max-width: 420px) {
  .page-aside {
    display: none !important;
  }
}
aside {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 50%;
  justify-content: center;
}
aside img {
  width: 3rem;
  height: 3rem;
}
aside li {
  list-style: none;
  margin: 10px 0;
}

.page-aside {
  position: fixed;
  z-index: 1030;
  height: 100%;
  padding: 0.5rem;
  right: 0;
}

.page-aside_list {
  border-width: 2px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #b90024;
  border-radius: 3rem;
}
.social-icon {
  width: 70%;
}
.fb-config {
  fill: gray;
}
.inst-config {
  fill: gray;
}
.linkedin-config {
  fill: gray;
}
.twitter-config {
  fill: gray;
}
.fb-config:hover{
    fill: #efa34b;
}
.inst-config:hover{
    fill: #efa34b;
}
.linkedin-config:hover{
    fill: #efa34b;
}
.twitter-config:hover{
    fill: #efa34b;
}
</style>


