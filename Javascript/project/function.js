
function msg(c){
a ="My name is "+c
return a
}

console.log(msg("Samjhana"))
console.log(msg("Sita"))
console.log(msg("Gita"))
console.log(msg("Rita"))
console.log(msg("Meeta"))
console.log(msg("Neeta"))

//WAp to ask two different number and sum it
x=6
y=9
//function sum(a=0,b=0)
function sum(a,b){
    c=a+b
    return c;
}
console.log(sum(x,y))
console.log(sum(7,5))
console.log(sum(15,5))
console.log(sum(20,5))

//WAP to calculate simple interest using function in javascript
//Normal function
// x=25000
// y=5
// z =2
// function SI(P,T,R){
//     c= (P*T*R)/100
//     return c
// }
// console.log(SI(2000,5,8))
// console.log(SI(x,y,z))


//variable of function
// x=25000
// y=5
// z =2
// var SI=function (P =0,T=0,R=0){
//     c= (P*T*R)/100
//     return c
// }
// console.log(SI(2000,5,8))
// console.log(SI(x,y,z))


//arrow function
x= 25000
y=5
z =2
var SI= (P =0,T=0,R=0) => {
    c= (P*T*R)/100
    return c
}
console.log(SI(2000,5,8))
console.log(SI(x,y,z))

//single line function
x= 25000
y=5
z =2
var SI= (P =0,T=0,R=0) => c= (P*T*R)/100

console.log(SI(2000,5,8))
console.log(SI(x,y,z))