var date1 = new Date(2017,9,18,12,34,1);
console.log(date1);

var date2 = new Date(17,9,18,12,34,1);//若years为2位的话自动加1900
console.log(date2);

var date3 = new Date("2017-08-09");
console.log(date3);

//var date4 = new Date(0);    //1970-01-01:00:00:00
var date4 = new Date(1000); //1970-01-01:00:00:01
console.log(date4);

var date5 = new Date();
console.log(date5);
//new Date(Date.now());


//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string
