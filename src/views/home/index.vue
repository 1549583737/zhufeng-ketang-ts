<template>
    <div class="home">
<!--        首页头部-->
        <HomeHeader>
            {{category}}
        </HomeHeader>
<!--        轮播图-->
        <HomeSwiper></HomeSwiper>
<!--        课程列表-->
        <HomeList></HomeList>
    </div>
</template>

<script lang="ts">
    import {defineComponent, computed} from 'vue';
    import HomeHeader from './home-header.vue'
    import HomeList from './home-list.vue'
    import HomeSwiper from './home-swiper.vue'
    import {useStore} from 'vuex'
    import {IGlobalState} from "@/store";
    import "@/hooks"
    export default defineComponent({
        name: "index",
        components: {
            HomeHeader,
            HomeList,
            HomeSwiper
        },
    setup() {
          let store = useStore<IGlobalState>();
        let category = computed(()=>{
            store.state.home.currentCategory
        });
        return {
              category
        }
    }
    })
</script>

<style scoped>

</style>