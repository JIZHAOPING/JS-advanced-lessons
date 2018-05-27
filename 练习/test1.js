// // window.onload = function () {
// //     console.log("window onload");
// //     var div2 = document.getElementById("div2");
// //     div2.onclick = function () {
// //         console.log("div2 click");
// //     }
// //     //思考：将下述7到11行代码写在window.onload回调函数外会怎样
    
// //     //不能写在window.onload之外，因为div2没有被定义
    
// //     //不能重复添加事件，因为前面写的会被被覆盖

// //     // div2.onmouseover = function () {
// //     //     console.log("div2 mouseover");
// //     // }
// // }
// // function div1click() {
// //     console.log("div1 click");
// //     //console.log("this:", this);
// // }//不会执行


// window.onload=function(e){
//     //console.log(this);//window
//     //console.log(e.target);//#document
//     //console.log(e);//event
//     //console.log(e.clientX,e.clientY);//事件坐标


//     console.log(e);//event
//     console.log(e.__proto__);//event
//     console.log(e.__proto__.__proto__);//constructer
//     console.log(e.__proto__.__proto__.__proto__);//null
//     console.log(e.__proto__.__proto__.__proto__.__proto__);//没有



// }

// //addEventListener:向指定元素添加事件句柄
// div1.addEventListener("click",eventHandler,false);//第三个参数可选，意义是在冒泡阶段进行
// //removeEventListener:移除 addEventListener() 方法添加的事件句柄
// div2.removeEventListener("click",eventHandler);//取消事件响应处理

// //dispatchEvent:给节点分派一个合成事件。
// div2.dispatchEvent(new Event("MyEvent"));






//测试2 DOM0级事件处理
/*
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//思考：是覆盖还是两个语句都会输出？
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
*/


//测试3 DOM2级事件处理
// window.onload = function (e) {
//     var div1 = document.getElementById("div1");
//     var div2 = document.getElementById("div2");
//     var eventHandler = function (e) {
//         console.log(e.clientX,e.clientY);
//     }
    

//     div2.addEventListener("click",eventHandler);
//     //div2.addEventListener("click",eventHandler,false);
//     //div2.removeEventListener("click",eventHandler);//取消事件响应处理

//     //自定义事件、事件分发、事件监听
//     div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
//     div2.dispatchEvent(new Event("MyEvent"));


//     //addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在哪个原型上的？
//     console.log(div2.__proto__);//HTMLDivElement
//     console.log(div2.__proto__.__proto__);//HTMLElement
//     console.log(div2.__proto__.__proto__.__proto__);//Element
//     console.log(div2.__proto__.__proto__.__proto__.__proto__);//Node
//     console.log(div2.__proto__.__proto__.__proto__.__proto__);//Node
//     console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);//EventTarget
//     //EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器
    
// }









/*
//DOM0级事件响应 定义在哪里？
document.body.__proto__.hasOwnProperty("onclick");//false
document.body.__proto__.__proto__.hasOwnProperty("onclick");//true

//DOM2级事件响应  定义在哪里？
document.body.__proto__.hasOwnProperty("addEventListener");//false
"addEventListener" in document;//true
document.body.__proto__.__proto__.__proto__.__proto__.__proto__.hasOwnProperty("addEventListener");//true
*/

