(function max(x,y){
    return x>y?x:y;
}(2,3));//立即执行表达式可以立即执行，结果为3

!function(x,y){//因为立即执行，所以可以不加函数名
    return x==y?true:false;//二等要进行数组类型转换
}("5",5);//立即执行表达式执行完成以后要进行逻辑运算符的运算
//false

(function(){
    cpnsole.log("111");
})()
(function(){
    console.log("222");
})
//111
//报错：两个立即执行表达式之间必须要加上分号

var x=10;
document.onclick=function(){
    alert("x="+x);//在点击的时候另外一个文件已经执行覆盖了上面的x=10，x变成了20
};//4.09(02)的文件中的x值会污染旁边这个函数中的x的值
//将02中那个函数加上括号变成立即执行表达式就可以避免这个问题
//使用立即执行表达式将函数封装起来

function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++){//创建了10个作用域
        (function(i){
            getNumFuncs[i]=function(){return i;};//以上三个"i"都是形参
        })(i);//这个是实参
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//？？？
//3

function f1(){
    var x=1;
    function f2(){
        return x++;//因为++是在后面
    }
    return f2();
}
var f3=f1();
console.log(f3);//1
console.log(f3);//1；因为x没有被释放

