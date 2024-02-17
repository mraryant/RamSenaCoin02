import React from 'react'
import "./Topnav.css"
import logo from '../assets/logo.svg'
const TopNavbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg " style={{zIndex:999 ,position:"fixed" , padding:"20px 20px", width:"100%" ,marginBottom:1, }}>
  <div className="container-fluid">
    <a className="navbar-brand navfont" href="#" style={{color:"black"}}> <img src={logo} style={{width:150, height:"100%"}} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <img src='' className="navbar-toggler-icon" style={{backgroundImage:"none"}} alt=""  />
    </button>
    <div className="collapse navbar-collapse navmain " id="navbarText">
    <span className="navbar-nav   mb-2 mb-lg-0">
    
      </span>
      <ul className="navbar-nav centerbar " >
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" style={{color:"white",fontFamily:"Manrope"}} href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black",fontFamily:"Manrope"}}>Wallet</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black",fontFamily:"Manrope"}}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"black",fontFamily:"Manrope"}}>Tokenomics</a>
        </li>
      </ul>
      <span className="navbar-nav   mb-2 mb-lg-0">
     <button className='btn btn-light'>Login</button>
      </span>
    </div>
  </div>
</nav>
    </>
  )
}

export default TopNavbar