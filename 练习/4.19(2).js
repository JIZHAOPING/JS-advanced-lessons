var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=function(){this.z=3};
var obj3=new obj3();//实例化出一个对象
console.log(obj1,obj2,obj3);
//{x:1} {y:2} {z:3}


var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});//obj是对象，"x"是属性
for(var k in obj){
    conosole.log(k,obj[k]);
}//可以遍历所有可枚举属性
//y 2


var person={name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,//一旦此属性被改为false,则不可写也不可写删
    enumerable:true,
    value:"Mike"
});
console.log(person.name);
person.name="lucy";
console.log(person.nmae);
delete person.name;
console.log(person.name);
//Mike
//Mike
//Mike


var obj={
    x:1,
    y:2
};//直接添加的属性，其所有特性默认都是true
obj.z=3;
//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
