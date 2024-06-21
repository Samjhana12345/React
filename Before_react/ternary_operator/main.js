let num = prompt("Enter any one number:")
let rem = num%2
let result
// if(rem == 0){
//     result = "EVEN"
// }
// else{
//     result = "ODD"
// }
result = rem ==0?"EVEN":"ODD"
document.getElementById('root').innerHTML = `<h1> ${result} </h1>`