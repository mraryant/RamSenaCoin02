// import React from 'react'
import msme from '../assets/Msme-logo.png'

const Section9 = () => {
  return (
    <>
      <div id="s9-main" className='d-flex   justify-content-center' style={{ height: "50vh", width: "100vw", padding: "40px 0px" }} >
        <a href="https://www.msmepci.org/Home/Index" target="blank">
          <img style={{ height: "100%", width: "100%" }} src={msme} alt="msmi logo" />
        </a>
      </div >
      <p style={{ color: "white", fontSize: "20px", textAlign: "center" }}>Affiliated by MSME Promotion Council Of India ( MSME PC)
      </p>
    </>
  )
}

export default Section9