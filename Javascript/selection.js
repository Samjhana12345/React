//WAP in javascript to ask any number and check that given number is positive or negative

var num = parseInt(prompt("Enter any number"))
var msg;
if(num>0){
    msg = "Positive"
}
 else{
    msg = "Negative"
 }
 document.write(`
                <h3 style='color:green'>
                ${num} is ${msg} number.
               
                </h3>
                `)