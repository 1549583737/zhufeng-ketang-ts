<template>
  <div class="home-header">
    <img src="@/assets/logo.png" alt="" />
    <van-dropdown-menu>
      <van-dropdown-item
        :modelValue="category"
        :options="options"
        @change="change"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";
import { CATEGORY_TYPES } from "@/typings";

export default defineComponent({
  name: "home-header",
  props: {
    category: {
      type: Number as PropType<CATEGORY_TYPES>
    }
  },
  emits: ["setCurrentCategory"], // 为了提示作用的
  setup(props, context) {
    const state = reactive({
      options: [
        { text: "全部课程", value: CATEGORY_TYPES.ALL },
        { text: "react课程", value: CATEGORY_TYPES.REACT },
        { text: "vue课程", value: CATEGORY_TYPES.VUE },
        { text: "node课程", value: CATEGORY_TYPES.NODE }
      ]
    });
    function change(value: CATEGORY_TYPES) {
      context.emit("setCurrentCategory", value);
    }
    return {
      change,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="sass">
.home-header
    height: 65px
    background: #2a2a2a
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 2.5%
    position: fixed
    top: 0
    left: 0
    width: 95%
    img
         height: 50px
    .van-dropdwon-menu__title
        color: #fff
    .van-dropdwon-menu__bar
        background: #2a2a2a
</style>
