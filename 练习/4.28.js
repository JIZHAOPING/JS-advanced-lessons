function Person(name,age){
    this.name=name;
    this.age=age;
};
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(name,age,id){
    Person.call(this,name,age);//等价于：this.name=name;this.age=age
    this.id=id;//等价于:this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student("xxx",22,2017001);
var s2=new Student("www",23,2017002);


//constructor
// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);