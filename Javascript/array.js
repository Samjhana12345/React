//WAP to store 10 values in array and to count even number and odd number
var num =[45 , 5, 35,7,8,9,7,8,9,0]
var len = num.length
even = 0
odd =0
console.log(len)

for(i = 0; i <=len-1; i++)
    {
       r = num[i]%2
       if(r==0){
        even++;
        
       }
       else{
        odd++
       }
     
    }
    console.log("Total even number:" +even)
    console.log("Total odd number:" +odd)
// console.log(num[0])
// console.log(num[1])
// console.log(num[2])
// console.log(num[3])
// console.log(num[4])
// console.log(num[5])






