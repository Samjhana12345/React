// //Simple Intrest
var p = parseInt(prompt("Enter the principal"))
var t = parseInt(prompt("Enter the time"))
var r = parseInt(prompt("Enter the intrest rate"))
var s = (p*t*r)/100

document.write(`
            <h1 style='color:red'>
            Principal = ${p}<br>
            Time = ${t}<br>
            Rate = ${r}<hr>
            Simple_Interest = ${s}
            </h1>
            `
            )

//area of rectangle
var l = parseInt(prompt("Enter the length"))
var b = parseInt(prompt("Enter the breadth"))

var area = l*b

document.write(`
            <h1 style='color:yellow'>
            length = ${l}<br>
            breadth = ${b}<hr>
            area = ${area}
            </h1>
            `)

//time in minute and second
var hour = parseInt(prompt("Enter the hour"))
var minute = hour * 60
var second = hour *60*60

document.write(`
            <h1 style='color:green'>
            Hour = ${hour}<hr>
            Minute = ${minute}<br>          
            Second = ${second}
           
            `)
       
            

