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