let num = [5,6,7,0,43,3]
// let len = num.length
// let result = []

// for(i = 0; i<len; i++){
//     if(num[i]%2==0)
//    {result[i] = num[i]}
// }
// document.getElementById("root").innerHTML=result

//use of map
// let result = num.map((n)=>(n*2))
// console.log(result)
// document.getElementById("root").innerHTML=result


//use of filter
let result = num.filter((n)=>n%2==0)
console.log(result)

//use of find
let res = num.find((n)=>n==0)
console.log(res)



