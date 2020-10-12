// 函数主要关心返回值和参数
function sum1(a:string, b:string):string {
    return a + b;
}
sum1('a', 'b');

// 可以通过表达式来定义

// 声明一个类型
// type Sum = ((aa:number, bb:number) => number) | string
// type Sum = (aa:number, bb:number) => number
// interface Sum {
//     (a:number,b:number):number
// }
// 区别 interface可以继承 可以被类来实现
// type仅仅是一个别名 一般在定义联合类型，定义临时变量是可以使用

let sum2:(aa:number,bb:number)=>number = (a:number, b:number):number=>a+b
// sum2 = '666';
