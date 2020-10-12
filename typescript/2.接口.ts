// 用来描述对象形状的 interface

interface ISchool {
    readonly name:string,
    age:number,
    address?:string
}

let school:ISchool = {
    name: 'zf',
    age: 11,
    address: '紫金东郡'
};

// school.name = 'ddd'

// 接口可以扩展
interface IZhufeng extends ISchool {
    type: string,
    [key:string]:any // 任意类型 key不一定是key叫啥都行标识
}

let zhufeng :IZhufeng = {
    ...school,
    type: 'web',
    a:1,
    b:2
};

// 类型断言 标识这个对象就是这样一个类型
let school2: ISchool = ({
    name: 'zf',
    age: 11,
    address: '南京',
    lessons: ['架构课', '基础课']
}) as ISchool;

let a:number = 1;
a as any as string
