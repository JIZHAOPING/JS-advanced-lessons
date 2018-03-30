console.log(typeof new new Function);//Object
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true


var Person=function(name){
    this.name=name;
}
console.log(Person instanceof Object);//true
console.log(person instanceof Function);//true
var p=new Person("Jack");
console.log(p instanceof Object);//true
console.log(p instanceof Function);//false
var q=new p;//报错


function foo(x,y,z){};
console.log(foo.length);//3;得到的是形参的长度，如果想要实参的长度，用argument


function test(){
    if(test.caller==null){
        console.log("the toppest level");
    }else{
        console.log("the function");
        console.log(test.caller.toString());
    }
}
test();
function testOuter() {
    test();
}
testOuter();
//the toppest level
//the fuunction


var a=[];
a;//输出这个数组和原型
var b={};
b;//输出这个对象和原型

o.__proto__===Object.prototype;//true
//o的原型是构造函数的原型属性
Object.__proto__===Function.prototype;//true


var x=45;
var obj={
    x:23;
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo.bind(this)();
        foo();
    }
}
obj.test();//23  45

var x=45;
var obj={
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        var fee=foo.bind(this);
        fee();
        foo();
    }
}
obj.test();//23  45


var obj1={
    foo:function(y){
        console.log(this.x,y);
    }
}
var obj2={
    x:34
}
obj1.foo.call(obj2,"xx");//34 "xx"

var obj1={
    foo:function(y){
        console.log(this.x,y);
    }
}
var obj2={
    x:34
}
var fee=obj1.foo.bind(obj2);//绑定
fee();//34 undefined


var x=12
var obj={
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
}
var fun1=function(){
    return function fun2(){
        return this.x;
    }
}
obj.fun3=fun1;
obj.fun4=fun1();
console.log("输出：",obj.fun3());//返回函数对象
console.log("输出：",obj.fun3()());//12；全局
console.log("输出：",obj.fun4());


console.log(a,b);//undefined undefined
var b=23;
console.log(a,b);//undefined 23
var a=b;
console.log(a,b);//23 23

console.log(foo);//undefined
foo();
var foo=funciton(){
    console.log("foo")
}//报错


var name="Jack";
function echo(){
    console.log(name);//加上age
}
function foo(){
    var name="Bill";
    //var age=23;加上之后
    echo();
}
foo();//Jack


var f2=function(){
    y="全局";
    console.log(y);
}
f2();
console.log(y);//全局 全局；y定义到了window上


