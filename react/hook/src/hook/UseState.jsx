import React, { useEffect, useState } from 'react'

function UseState() {
    const [count, setCount]=useState(0)
    const [testcount, settestCount]=useState(10)

useEffect(()=>{
console.log("Show me"+count +testcount)
},[testcount])

function increment(){
  setCount(count+1)
}
function decrement(){
  setCount(count-1)
}

  return (
   <>
   <h1> Examples of useState </h1>
  {/* <h1> 
    <button onClick={()=>setCount(count+1)}>+</button>  
    
   {count}    
   <button onClick={()=>setCount(count-1)}>-</button>
   </h1> */}

{/* by using function */}
<h1>
<button onClick={()=>increment()}>+</button>  
{count}
<button onClick={()=>decrement()}>-</button>
</h1>
<br/>
<button onClick={()=>settestCount(testcount + 5)}>+</button>  
{testcount}
<button onClick={()=>settestCount(testcount - 5)}>-</button>
   </>
  )
}

export default UseState