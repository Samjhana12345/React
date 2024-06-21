import React, { createContext } from 'react'
import Event_handling from './Event_handling'
import UseState from './hook/UseState'
import Fetch_api_data from './hook/Fetch_api_data'
import Form from './hook/Form'
import ComponentA from './hook/Group/ComponentA'
import Catwise from './hook/Catwise'
import { Route, Routes } from 'react-router-dom'
import Items_search from './hook/Items_search'
export  let nameContext = createContext()
function App() {
 
  let names =' Samjhana Silwal'
  let address = "Kathmandu"
  let users = "Samjhana Silwal"
  return (
   <>
  {/* <Event_handling n={names} add = {address}/> */}
  {/* <UseState/> */}

 {/* <Form/>
<Routes>
  <Route path='/' element={<Fetch_api_data/>}></Route>
  <Route path='/catwise/:cat_id' element={<Catwise/>}></Route>

</Routes>  */}

{/* <nameContext.Provider value = {users}>
<ComponentA user_name={users}/>
</nameContext.Provider> */}
<Items_search/>
   </>
  )
}

export default App