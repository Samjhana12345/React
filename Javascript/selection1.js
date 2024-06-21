//WAP in javascript to ask week day number and show days name in week as given number

var num = parseInt(prompt("Enter any number to display days name"))
var day;

if(day == 1){
    day = "sunday"
}
else if(day == 2){
    day = "monday"
}
else if(day == 3){
    day = "tuesday"
}
else if(day == 4){
    day = "wednesday"
}
else if(day == 5){
    day = "thursday"
}
else if(day == 6){
    day = "friday"
}
else if(day == 7){
    day = "saturday"
}
else{
    day = "NO day of Week"
}

document.write(`
            <h3>
            ${num}th is ${day}
            </h3>
                `)