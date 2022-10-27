var obj={
    num:5
};
var adding=function(a,b,c){
    return this.num+a+b+c;
    
}
console.log(adding.call(obj,1,2,3));
var arr=[1,2,3];
console.log(adding.apply(obj, arr));

var bound=adding.bind(obj);
console.log(bound(1,2,3));

var student={
    age:20
};
var adding1=function(age){
    return this.age+age;
}
var bound=adding1.bind(student);
console.log(bound(0));


 
//function curring

/*let multiply=function(x,y){
    console.log(x*y);
}
let multiplyByTwo= multiply.bind(this,2);
multiplyByTwo(3);
let multiplyByThree= multiply.bind(this,3);
multiplyByThree(3);*/

//function clousers
let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo= multiply(2);
multiplyByTwo(3);
