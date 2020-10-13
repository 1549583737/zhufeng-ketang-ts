<template>
  <div class="home">
    <!--        首页头部-->
    <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory">
    </HomeHeader>
    <div class="home-container" ref="refreshElm" style="margin-top: 65px;">
      <Suspense>
        <template #default>
          <HomeSwiper></HomeSwiper>
        </template>
        <template #fallback>
          <div>loading</div>
        </template>
      </Suspense>
    </div>
    <!--        课程列表-->
    <HomeList :lessonList="lessonList"></HomeList>
    <div v-if="isLoading">正在加载中...</div>
    <div v-if="!hasMore">我是有底线的</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import HomeHeader from "./home-header.vue";
import HomeList from "./home-list.vue";
import HomeSwiper from "./home-swiper.vue";
import { useStore, Store } from "vuex";
import { IGlobalState } from "@/store";
import "@/hooks";
import { CATEGORY_TYPES } from "@/typings";
import * as Types from "@/store/action-types";
import { useLoadMore } from "@/hooks/useLoadMore";
// 专门为修改分类使用的options api

function useLessonList(store: Store<IGlobalState>) {
  const lessonList = computed(() => store.state.home.lessons.list);
  onMounted(() => {
    // 初始化加载 如果vuex中已经有数据了 就不用继续加载了
    if (lessonList.value.length == 0) {
      store.dispatch(`home/${Types.SET_LESSON_LIST}`);
    }
  });
  return {
    lessonList
  };
}

function useCategory(store: Store<IGlobalState>) {
  const category = computed(() => store.state.home.currentCategory); // vuex中的状态
  function setCurrentCategory(category: CATEGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category);
  }
  return {
    category,
    setCurrentCategory
  };
}
export default defineComponent({
  name: "index",
  components: {
    HomeHeader,
    HomeList,
    HomeSwiper
  },
  setup() {
    // 1.需要获取vuex中的分类状态，有个更改状态的功能
    const store = useStore<IGlobalState>();
    // 分类
    const { category, setCurrentCategory } = useCategory(store);
    // 课程获取
    const { lessonList } = useLessonList(store);
    // 获取真实dom
    const refreshElm = ref<null | HTMLElement>(null);
    const { isLoading, hasMore } = useLoadMore(
      refreshElm,
      store,
      `home/${Types.SET_SLIDER_LIST}`
    );

    return {
      isLoading,
      hasMore,
      lessonList,
      category,
      setCurrentCategory
    };
  }
});
</script>

<style lang="scss">
.home-container {
  position: absolute;
  top: 65px;
  bottom: 50px;
  with: 100%;
  overflow: scroll;
}
</style>
