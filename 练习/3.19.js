var i=65;
switch(new Boolean(true)){
    case(new Boolean(i>=60)):
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');

}//default


var j=new Number(23);
switch (j) {
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}//case_default


function isStrictMode() {
    return this===undefined?true:false;

}
console.log(isStrictMode());//false
function isStrictMode() {
    return this===window?true:false;
}
console.log(isStrictMode());//true;

"use strict"
function isStrictMode() {
    return this===window?true:false;
}
console.log(isStrictMode());//false


function foo() {
    var a=b=3;//等价于a=3;b=3;a是一个局部变量，b是一个全局变量
}
foo();
window.b===b;//true


var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1==obj2);//false
console.log(obj1===obj2);//false
console.log(obj1==new String("xyz"));//false

var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"!=obj1);//false
console.log(obj1!==obj2);//true
console.log(obj1!=obj2);//true
console.log(obj1!=new String("xyz"));//true


var x="1";
x+=1;
console.log(x);//11

x/=1;
console.log(x);//11
typeof x;//"number"
// 加、加等：字符串类型；除等：数字类型


var x=45;
var obj={
    x:23,//注意是逗号
    test:function() {
        function foo() {
            console.log("输出：",this.x);
        }
        foo();
    }
};
obj.test();//输出：45