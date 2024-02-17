// import React from 'react'
import sec3img from '../assets/sec3img.svg'
import '../styles/Section2.css'
import '../styles/Section3.css'
import sec3icon1 from '../assets/sec3icon1.svg'
const Section3 = () => {
  return (
    <>
      <div className="sec3main" id="about">
        <div className="sec3content">
          <div className="sec3left">
            <img src={sec3img} alt="" style={{ width: "60%", height: "60%" }} />
            <div className="shadow">

            </div>
          </div>
          <div className="sec3right">
            <p className="sec3mini">Benefits</p>
            <p className="sec3head" >The benefits of using
              Ramsena Coins</p>

            <div className="sec3cards">
              <div className="sec3c1">
                <div className="sec3imgbar">
                  <img src={sec3icon1} className='sec3c1img' alt="" />
                </div>
                <p className='sec3c1head'>Symbolic
                  Representation</p>
                <p className='sec3c1para'>By Using Ramsena Coin,
                  Individuals Align Themselves With The Values Of Unity,
                  Hinduism, And Hindutva. It Serves As A Digital Symbol
                  Of Promoting Understanding And Cooperation Among Diverse
                  Communities.</p>
              </div>
              <div className="sec3c1">
                <div className="sec3imgbar">
                  <img src={sec3icon1} className='sec3c1img' alt="" />
                </div>
                <p className='sec3c1head'>Supporting Social
                  Harmony</p>
                <p className='sec3c1para'>Ramsena Coins Focus On
                  Unity And Inclusivity Contributes To The Promotion
                  Of Social Harmony. By Engaging With A Cryptocurrency
                  That Emphasizes Mutual Respect And Cooperation Among
                  Different Religious Groups.</p>
              </div>

            </div>

            <div className="sec3cards">
              <div className="sec3c1">
                <div className="sec3imgbar">
                  <img src={sec3icon1} className='sec3c1img' alt="" />
                </div>
                <p className='sec3c1head'>Secure <br />
                  Transactions</p>
                <p className='sec3c1para'>Ramsena Coin Operates
                  On Blockchain Technology, Ensuring Transparency,
                  Security, And Immutability Of Transactions. The
                  Decentralized Nature Of The Blockchain Makes Ramsena
                  Coin A Trustworthy Platform.</p>
              </div>
              <div className="sec3c1">
                <div className="sec3imgbar">
                  <img src={sec3icon1} className='sec3c1img' alt="" />
                </div>
                <p className='sec3c1head'>Symbolic
                  Representation</p>
                <p className='sec3c1para'>Using Ramsena Coin Can
                  Indirectly Contribute To The Initiatives Supported
                  By The Organization. The Commitment To Uplifting
                  Communities And Empowering The Underprivileged Means
                  That A Portion Of Its</p>
              </div>

            </div>
            <br />
          </div>
        </div>
        {/* <div className="shadow" style={{zIndex:1}}>
        
        </div> */}
      </div>
    </>
  )
}

export default Section3