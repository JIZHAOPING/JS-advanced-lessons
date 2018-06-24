var [x,y,z,w] = ["a","b","c","d"];
[x, y,z,w] = [w,z,y, x];//模式匹配
console.log(x,y,z,w);// d c b a



function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();
console.log(a,b,c);// 1 2 3

var a,b,c;
var e=example();
a=e[0];
b=e[1];
c=e[2];
console.log(a,b,c);// 1 2 3



function example() {
    return {
        foo:undefined,
        bar:null
    };
}
var { foo=1, bar=2 } = example();
console.log(foo,bar);// 1 null



//解构赋值的常见应用：提取JSON数据
//把字符串转换成对象的方法：json.pass；相反：stringfy

var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);


var reg1=/^hello/gi;
var reg2=/\bhello/gi;


"hello world".replace(reg1,"*");
"* world"
"hello world".replace(reg2,"*");
"* world"


//repeat:重复
//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3); // "xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); // ""
//参数如果是小数，会被取整。
'na'.repeat(2.9); // "nana"
//如果repeat的参数是负数或者Infinity，会报错。
'na'.repeat(Infinity);
// RangeError
'na'.repeat(-1);
// RangeError



//（粘连sticky）修饰符
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
console.log(r1.exec(s)); // ["aaa"]
console.log(r2.exec(s)); // ["aaa"]
console.log(r1.exec(s)); // ["aa"];从上一个匹配的开始匹配
console.log(r2.exec(s)); // null;不管上一个匹配的最后是啥，都从第一个字符开始


//ES6
Number.isFinite();//用来检查是否是一个有限的
Number.isNaN();//用来检查一个值是否是一个nan