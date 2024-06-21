import React from 'react'
import ComponentC from './ComponentC'

function ComponentB(props) {
  return (
    <>
    <div>ComponentB</div>
 
    {/* <ComponentC user_name = {props.user_name}/> */}
     <ComponentC/> 
    </>
  )
}

export default ComponentB