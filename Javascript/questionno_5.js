var sal = parseInt(prompt("Enter the amount of salary"));
var year = parseInt(prompt("Enter the number of years you have been working"));
var bonus = 0;  // Initialize bonus to 0
var msg = "";   // Initialize msg to an empty string

if (year >= 5) {
    // Calculate the bonus amount
    bonus = 0.05 * sal;
    // Calculate the net salary including the bonus
    sal = sal + bonus;
  
} else {
    msg = "No bonus";
    
  
}
document.write(`
<h1 style='color:green'>
    Bonus amount is ${bonus}<br>
    Salary is ${sal}<br>
    ${msg}
</h1>
`)


