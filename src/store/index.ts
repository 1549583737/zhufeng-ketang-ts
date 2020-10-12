import { createStore } from "vuex";
import home from './modules/home';
import {CATEGORY_TYPES} from "@/typings";

// 首页里应该存哪些数据

export interface ILesson {
  title:string,
  video:string,
  poster:string,
  price:number,
  category?:string
}

export interface ISlider {
  url: string
}

export interface ILessons {
  hasMore:boolean, // 有没有更多数据
  loading:boolean, // 默认没有正在加载
  offset:number,
  limit:number,
  list:[]//
}

export interface IHomeState {
  currentCategory: CATEGORY_TYPES,
  sliders: ISlider[],
  lessons: ILessons
}

export interface IGlobalState {
  home: IHomeState // 某个页面，某个某块可以在这里增加
}

const store = createStore<IGlobalState>({
  // state: {},
  mutations: {},
  actions: {},
  modules: {
    home
  }
});

export default store