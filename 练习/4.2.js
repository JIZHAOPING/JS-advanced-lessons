var a=10;
    b=20;
function fn(){
    var a=100,
        d=200;
    function bar(){
        var a=500,
            d=600;
    console.log(a,b,c,d);
}
bar();
};
fn();//500 20 200 600

var a=10,
    b=20;
function fn(){
    var a=100,
        c=200;
    function bar(){
        var a=500,
            d=600;
    }
    bar();
    console.log(a,b,c,d);
}
fn();//报错：d没有定义

var a=10,
    b=20;
function fn(){
    var a=100,
        c=200;
    function bar(){
        var a=500;//改成分号之后相当于定义了一个全局变量？
            d=600;
    }
    bar();
    console.log(a,b,c,d);
}
fn();//100 20 200 600



var scope="global";
function foo(){
    var scope="1";
    return new Function("console.log(scope);")
}
foo()();//global
通过new Function创建的函数对象不一定遵从静态词法作用域!!!
var scope="global";
function foo(){
    var scope="1";
    return function(){
        return scope;
    }
}
console.log(foo()());//1


var userID=123;
document.onclick=function(){
    console.log("userID=",userID);
}
//......(很长一段代码后)
var a=2,b=3;
if(a<b){
    var userID=234;
}//会忘记了上面的代码，这样的重复定义，所以变量就会被污染变成234
//只能这样写：
(function(){
    var a=2,b=3;
    if(a<b){
        var userID=234;
    }
}());//这样点击一下网页才会出现123









