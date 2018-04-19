var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
  


var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x,o._x);


var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);
o.x = 2;
console.log(o.x);


var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);