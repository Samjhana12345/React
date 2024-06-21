import React from 'react'

function Nav() {
  return (
   <>
    <div id='navigation'>
 <nav className="navbar navbar-expand-lg bg-warning">
    <div className="container">
        <a className="navbar-brand" href="#"><span className='text-danger fw-bold '></span>News Portal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/gallery">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/download">Business</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/about">Entertainment</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/contact">Sports</a>
                </li>   
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/contact">Others</a>
                </li>   
    
            </ul>
    
        </div>
    </div>
    </nav>
    </div>
   </>
  )
}

export default Nav