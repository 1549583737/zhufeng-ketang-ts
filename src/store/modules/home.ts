import {Module} from "vuex";
import {CATEGORY_TYPES} from "@/typings";
import {IHomeState} from "@/store";


const state: IHomeState = {
    currentCategory: CATEGORY_TYPES.ALL,
    sliders:[],
    lessons: {
        hasMore:true, // 有没有更多数据
        loading:false, // 默认没有正在加载
        offset:0,
        limit:5,
        list:[]// 当前已经显示到页面的课程有哪些
    }
};


const home:Module<any,any> = {
    namespaced:true,
    state,

};

export default home;