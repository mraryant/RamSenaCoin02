// import React from 'react'
import sec2img from "../assets/sec2img.svg";
import "../styles/Section3.css";
const Section2 = () => {
  return (
    <>
      <div className="sec2main" id="about">
        <div className="sec2content">
          <div className="sec2left">
            <img src={sec2img} alt="" style={{ width: "80%", height: "80%" }} />
            <div className="shadow"></div>
          </div>
          <div className="sec2right">
            <p className="sec2head">About Ramsena</p>
            <p className="sec2para">
              Ramsena Coin Embraces Hinduism As A Revered Religion With A Rich
              Cultural And Philosophical Tradition. It Serves As A Symbol Of
              Respect For The Teachings And Values That Have Guided The Hindu
              Community For Generations. By Promoting The Essence Of Hinduism,
              The Coin Aims To Strengthen The Sense Of Identity And Pride Among
              Hindus, Fostering A Sense Of Community And Belonging.{" "}
            </p>

            <div className="sec2cards">
              <div className="c1">
                <img src="" className="c1img" alt="" />
                <p className="c1head">Social Work</p>
                <p className="c1para">
                  Accessible mental health support to all background and areas.
                </p>
              </div>
              <div className="c1">
                <img src="" className="c1img" alt="" />
                <p className="c1head">Save Cow Campaign</p>
                <p className="c1para">
                  Your privacy is sacred; we maintain the highest level of
                  confidentiality.
                </p>
              </div>
              <div className="c1">
                <img src="" className="c1img" alt="" />
                <p className="c1head">Ayodhya Yatra</p>
                <p className="c1para">
                  We foster a supportive community where you can connect and
                  share.
                </p>
              </div>
            </div>
            <div className="sec2list">
              <div className="s2list">Contribution To Ram Mandir</div>
              <div className="s2list">Education Sponsorship Program</div>
              <div className="s2list">Education Sponsorship Program</div>
            </div>
          </div>
        </div>
        {/* <div className="shadow" style={{zIndex:1}}>
        
        </div> */}
      </div>
    </>
  );
};

export default Section2;
