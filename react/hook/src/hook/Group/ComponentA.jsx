import React from 'react'
import ComponentB from './ComponentB'

function ComponentA(props) {
  return (
    <>
    {/* <div>ComponentA :{props.user_name}</div> */}
    <div>ComponentA</div>
    {/* <ComponentB user_name = {props.user_name}/> */}
    <ComponentB/>
    </>
  )
}

export default ComponentA