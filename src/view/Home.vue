<template>
    <div>
        <!-- <navbar></navbar> -->
        <socialApp/>
        <mainPic/>
        <videos/>
        <about-us/>
        <foodMenu/>
        <training></training>
    </div>
</template>
<script>
    import navbar from "../components/navbar.vue";
    import socialApp from "../components/socialAppIcon";
    import mainPic from "../components/mainPic";
    import videos from "../components/homeVideo";
    import aboutUs from "../components/AboutUs";
    import foodMenu from "../components/foodMenu";
    import training from "../components/trainingEdu";
    import shopList from "../components/home-shoppingList";
    import endFooter from "../components/footer";

export default {
    name: "homePage",
    components: {
        navbar,
        socialApp,
        mainPic,
        videos,
        aboutUs,
        foodMenu,
        training,
        shopList,
        endFooter
    }
};
</script>
<style>
    *{
        font-family: 'Noto Sans TC', sans-serif;
        padding: 0;
    }
</style>


