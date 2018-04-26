function Person(name,age){
    this.name = name;
    this.age = age;
}
var person1 = new Person("Mike",21);//person1的类型为Perosn


var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}//x的其他属性默认为false,y也是；
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));
for(var k in obj2){
    console.log(k,obj2[k]);
}//因为y的可枚举属性为false，所以其他的都遍历不出来
//y 2



var a={};
a.__proto__===Object.prototype;//true
空对象的原型指向Object.prototype

var div=document.createElement("div");
div;
//<div>​</div>​
div.__proto__;//指向HTMLDivElement，最后一层为Object,再往后是null