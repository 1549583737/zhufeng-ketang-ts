import axios from '.'
import {ISlider} from "@/store";
import {CATEGORY_TYPES} from "@/typings";

// 声明获取轮播图的接口api
export function getSliders<T>() {
    return axios.get<T,T>('/slider/list');
}

export function getLessons<T>(category:CATEGORY_TYPES, offset:number = 0, limit:number = 5) {
    return axios.get<T,T>(`/lesson/list?category=${category}&offset=${offset}&limit=${limit}`)
}

// getSliders<ISlider>().then(data=>{
//     data.url
// })