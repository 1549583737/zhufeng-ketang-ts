<template>
  <van-swipe v-if="sliderList.length">
    <van-swipe-item v-for="l in sliderList" :key="l.url">
      <img src="l.url" alt="" style="max-width: 100%;" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";
import * as Types from "@/store/action-types";
export default defineComponent({
  name: "home-swiper",
  async setup() {
    //
    const store = useStore<IGlobalState>();
    const sliderList = computed(() => store.state.home.sliders);
    if (sliderList.value.length == 0) {
      // 缓存 如果数据没有获取过才获取
      await store.dispatch(`home/${Types.SET_SLIDER_LIST}`);
    }
    console.log(sliderList);
    return { sliderList };
  }
});
</script>

<style scoped></style>
