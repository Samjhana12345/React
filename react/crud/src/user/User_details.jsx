import React from 'react'
import User_create from './User_create'
   import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import Login_form from './Login_form'


function User_details() {
  let [showAddUserModal ,setShowddUserModal] = useState(false)
  let [user_data, setUser_data] = useState([])
 
  let [input_data, setinput_data] = useState({
    name: '',
    gender: '',
    address: '',
    email: '',
    password: ''
  })
  let [getEditID,setGetEditID]= useState("")


  useEffect(() => {
    axios.get("http://localhost:3031/users")
      .then((res) => setUser_data(res.data))

  }, [user_data])

  let getAllusers=()=>{
    axios.get('http://localhost:3031/users/')    
   .then((res => setUser_data(res.data)))
      }
  
 
  let handleDelete=(id)=>{
    axios.delete('http://localhost:3031/users/'+id, input_data)    
    confirm("Do you want to delete the data?")
    alert("Sucessfully Deleted")
      }
  return (
    <>
     {/* <User_create/> */}
     {/* <Login_form/> */}
      <div className='container'>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>setShowddUserModal(true)}>
                        ADD NEW
                    </button>
                  
                    
    <div id='container'>
      <table className="table">
          <thead className='table-primary'>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">User Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Adress</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user_data.map((ud, i) =>
              <tr key ={i}>
                <th scope="row">{i + 1}</th>

                <td>{ud.name}</td>
                <td>{ud.gender}</td>
                <td>{ud.address}</td>
                <td>{ud.mobile}</td>
                <td>{ud.email}</td>
                <td>{ud.email}</td>
                <td><button className='btn btn-primary' onClick={()=>{setShowddUserModal(true); setGetEditID(ud.id)}}>EDIT</button> | <button className='btn btn-danger' onClick={()=>handleDelete(ud.id)}>DELETE</button></td>
              </tr>
            )}
          </tbody>
        </table>
        </div>

        {/* <Modal show = {showAddUserModal} onHide={()=>{setShowddUserModal(false)}}>
        <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}

     

        <User_create
        getEditID = {getEditID}
        showModal={showAddUserModal}
         getAdduser = {()=>{setShowddUserModal(false);getAllusers}}/>

 
        </div>
    </>
  )
}

export default User_details;

