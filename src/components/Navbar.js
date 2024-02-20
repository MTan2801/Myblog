import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg  -body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">MyBlog</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Service'>Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Contact'>Contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-info" type="submit">Login</button>
        <Link to="/signup"><button className="btn btn-success" type="submit">Sign Up</button></Link>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
