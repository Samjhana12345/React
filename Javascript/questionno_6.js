var sal = parseInt(prompt("Enter your total sales"))
if(sal <=1000){
    var com = 0.05*sal
    }
    else if(sal>=1001 && sal <=2500){
        var com = 0.1*sal
    }
    else if(sal>=2501){
        var com = 0.15 * sal
    }
document.write(`
                <h3>
                Commission for sales of ${sal} is ${com}.
                </h3>
`)