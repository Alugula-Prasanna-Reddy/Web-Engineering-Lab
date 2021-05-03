//1.a)setTimeout module
var t=0;
var interval=setTimeout(()=>{
    t+=2;
    console.log(t);
},2000);
//1.b)setInterval and clearInterval
// var i=0;
// var res=setInterval(()=>{
// i=i+2;
// console.log(i);
// },1000);
//1.c)clearInterval
var i=0;
var res=setInterval(()=>{
i=i+2;
console.log(i);
if(i>10)
{
    clearInterval(res);
}
},1000);

//2.current directory and filename
console.log(__filename);
console.log(__dirname);
//3.function statement,function expression ,callback function
function uname(name)
{
    return `hello ${name}`;
}
console.log(uname("prasanna"));
var roll=(rollno)=>{
    console.log("My roll.no is "+rollno);
}
roll(525);
var callFun=(callback)=>{
    callback();
}
var bye=function(){
    console.log('function call back');
};

callFun(bye);