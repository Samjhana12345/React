
//using React DOM
import React from "react";
import ReactDOM from "react-dom/client"
import Msg from "./Msg";
import Class_component from "./Class_component";
// import './style/style.css'
// import './SASS/main.scss'

// let msg = "Welcome to React"
// let Msg =()=>{
//     return "Welcome to react"
// }

ReactDOM.createRoot(document.getElementById('root')).render(
//react fragment
<>
 {/* using component method  
    <h1><Msg/> {5+5}</h1>  */}
    

    {/* using function         
    
    <h1>{Msg()} {5+5}</h1>
    <h2>Kathmandu</h2> */}

    {/* for calling the function based component */}
    {Msg()}

    {/* calling class component */}
    <Class_component/>
</>
// creating component ny using function or class
//function based

)


//using DOM
// let msg = "welcome to React"
// document.getElementById('root').innerHTML = `<h1> ${msg} </h1>`
