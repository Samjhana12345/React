import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
function Nav() {
  return (
    <>
     <div id='nav'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand mb-0 h1" href="#">Book Mandala</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Books
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link "  href="#">Deals</a>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
      <span className="input-group-text"><FaMagnifyingGlass /></span>
        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Ctrl+K</button>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Nav