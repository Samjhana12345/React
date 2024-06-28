import React from 'react'

function UserModal(props) {
    // function UserModal({onHide}) {
  return (
   <>
   <div className='container border border-danger w-50' >
    <div className='row text-end'>
        <div className="col"><h4 className='btn' onClick={props.onHide}>X</h4></div>
    </div>
        <div className='title'><h3>User</h3>
          <div className='py-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloremque tenetur nemo ut facilis? Deleniti nisi officiis nemo itaque, voluptas magni quae quis consequatur quod sunt ratione quam soluta sed?</div>
          <button className='btn btn-success'onClick={props.onHide}>Close</button>
          {/* <button className='btn btn-success'onClick={onHide}>Close</button> */}
        </div>
      </div>
   </>
  )
}

export default UserModal