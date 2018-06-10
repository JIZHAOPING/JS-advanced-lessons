//对应
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);

//let
let [x, , y] = [1, 2, 3];
console.log(x,y);//1 3

//不完全解构的情况
let [x2, y2] = [1, 2, 3];
console.log(x2, y2);

let [a2, [b2], d2] = [1, [2, 3], 4];
console.log(a2, b2, d2);


//
function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);//1


//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);//aaa bbb


//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5




//字符串也可以解构赋值
const [a, b, c, d, e] = 'hello';//相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"