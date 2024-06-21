import React from 'react'

function Event_handling(props) {
     function message(names,add) {
   
      alert("Your name is" +names + " and address is" +add)
    }
  return (
   <>
<h1>Event Handling</h1>
   <button onClick={()=>message(props.n,props.add)}>Hit me</button>
   </>
  )
}

export default Event_handling