import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Login_form from './Login_form'

function User_create(props) {
    let setData = (e) => {
        setinput_data({ ...input_data, [e.target.name]: e.target.value })

    }

    let [input_data, setinput_data] = useState({

        name: '',
        gender: '',
        address: '',
        email: '',
        password: ''
    })

    let showHide = props.showModal
    useEffect(()=>{
        getEditData()
    },[showHide])

    let getEditData = ()=>{
       if(props.getEditID !=""){
        axios.get("http://localhost:3031/users/"+props.getEditID)
        .then((res)=>setinput_data(res.data))
        .catch((err)=>console.log(err.message))
    }
}
useEffect(()=>{
  
},[props.showModal])

    let saveData = (e) => {
        if(props.getEditID == ""){
            axios.post('http://localhost:3031/users', input_data)
            .then((res)=>{
                props.getAdduser()
                alert("Sucecssfully Saved your data")
            })
           .catch((e)=>alert(e))
          
        }
        else{
            axios.put('http://localhost:3031/users/'+ props.getEditID, input_data)
        .then((res)=>{
            props.getAdduser()
            alert("Sucecssfully Modified your data")
        })
       .catch((e)=>alert(e))
        }
       
    }
    return (
        <>
          <Modal show = {showHide}>
        <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
    
            <Modal.Body><div className="row">
                <div className="col-12">
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" id="user_name" className="form-control" name="name" value={input_data.name} onChange={setData} />
                </div>
                <div className="col-12">
                    <label htmlFor="username" className="form-label">Gender</label>
                    <input type="text" id="gender" className="form-control" name="gender" value={input_data.gender} onChange={setData} />
                </div>

                <div className="col-12">
                    <label htmlFor="username" className="form-label">Address</label>
                    <input type="text" id="address" className="form-control" name="address" value={input_data.address} onChange={setData} />
                </div>
                <div className="col-12">
                    <label htmlFor="username" className="form-label">Email</label>
                    <input type="text" id="email" className="form-control" name="email" value={input_data.email} onChange={setData} />
                </div>
                <div className="col-12">
                    <label htmlFor="username" className="form-label">Password</label>
                    <input type="text" id="password" className="form-control" name="password" value={input_data.password} onChange={setData} />
                </div>
            </div>
            </Modal.Body>

            <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.getAdduser()}} >
            Close
          </Button>
          <Button variant="primary"
          onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default User_create