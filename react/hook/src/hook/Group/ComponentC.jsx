import React, { useContext } from 'react'
import { nameContext} from '../../App'
function ComponentC(props) {
    let user_name = useContext(nameContext)
  return (
    <>
    <div>ComponentC</div>
    {/* <h3>My name is {props.user_name} </h3> */}
    <h3>My name is {user_name} </h3>
    </>
  )
}

export default ComponentC