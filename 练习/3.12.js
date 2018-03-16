console.log({x:1}=={x:1});//false
console.log(NaN==NaN);//false
NaN==NaN;//false
typeof NaN;//"number"


var str="abc_def_ghi_jkl_mn";
console.log(str.split("_"));//["abc","def","ghi","jkl","mn"];用“_”把字符串分隔开
console.log(str.split("_",2));//["abc","def"]；返回被“_”分割的前两个
console.log(str.concat("_opq"));//abc_def_ghi_jkl_mn_opq；拼接
console.log(str.substr(4,7));//def_ghi；从第五个字符开始截取7个字符
console.log(str.substring(4,7));//def；剪切出第五到八个字符
console.log(str.slice(2));//c_def_ghi_jkl_mn；返回从第三个字符开始以后的字符
console.log(str.slice(2,5));//c_d；返回第三个到第六个字符
console.log(str.slice(-2));//mn；返回从最后开始数两个字符
console.log(str.slice(2,-2));//c_def_ghi_jkl_；返回从第三个字符开始到倒数第三个字符之间的字符


var a;//undefined
b;//会报错，因为b未声明，并且准确结果为：declared


var a=2;
if(2==a){//反写可以输出，并且漏写等号可以报错，正写则不会
    console.log("输出");
}


var n1=12345.6789;
console.log(n1.toFixed(2));//12345.68;保留两位余数
console.log(n1.toPrecision(2));//1.2e+4;把数字格式化为指定的长度
console.log(n1.toString());//12345.6789;把数字转换为字符串，使用指定的基数
console.log(n1.toExponential(2));//1.23e+4;把对象的值转换为指数计数法，舍掉的数字会四舍五入


console.log(typeof null);//object
function foo(){};//undefined
foo instanceof Object//true


var str="bacdef";
str.length;//6;这种情况下str不是对象，如果改变属性，是包装对象改变，使用完之后回到原始状态

new String("abcdef");//String{"abcedf"};包装成一个对象

var arr=[1,2,3];
arr.length=1;
console.log(arr,arr.length);//[1] 1;arr是数组对象具备了，当改变属性值之后，这个改变是永久的


if(new Boolean(false)){
    console.log("执行");//执行
}


console.log(Number.parseFloat("32343,345xx"));//32343

var temp="23"-1;//undefined
typeof temp;//"number"

var a1=2;
var a2=new Number(2);
a1==a2;//true


//返回false
var myBoolean=new Boolean();
var myBoolean=new Boolean(0);
var myBoolean=new Boolean(null);
var myBoolean=new Boolean("");
var myBoolean=new Boolean(false);
var myBoolean=new Boolean(NaN);
//返回true
var myBoolean=new Boolean(1);
var myBoolean=new Boolean(true);
var myBoolean=new Boolean("true");
var myBoolean=new Boolean("false");



