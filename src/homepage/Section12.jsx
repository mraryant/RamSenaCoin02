import React from "react";
import "../styles/Section12.css";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import user4 from "../assets/user4.jpeg";
import user5 from "../assets/user5.jpeg";
import user6 from "../assets/user6.jpeg";
import user7 from "../assets/user7.jpeg";
const Section12 = () => {
  return (
    <>
      <div className="s12main container">
        <p className="s12head">OUR TEAM</p>
        <div className="s12content">
          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user1} alt="" />
              </div>
              <br />
              <p className="s12name">GSK</p>
              <p className="s12sub">Founder And Director</p>
              <p className="s12third">London, UK</p>
            </div>
          </div>

          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user2} alt="" />
              </div>
              <br />
              <p className="s12name">SHRI NARSING MEGJI</p>
              <p className="s12sub">RAMESENA COMMITTEE</p>
              <p className="s12third">Rashtriya Mantri</p>
            </div>
          </div>
          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user3} alt="" />
              </div>
              <br />
              <p className="s12name">SHRI SSK</p>
              <p className="s12sub">RAMSENA COMMITTEE</p>
              <p className="s12third">
                Somavanshi Saharajaun Kshrtiya Samaj Socialist 50 Years.
              </p>
            </div>
          </div>
          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user4} alt="" />
              </div>
              <br />
              <p className="s12name">MR YOGESH SHAH</p>
              <p className="s12sub">RAMSENA COMMITTEE</p>
              <p className="s12third">
                Socialist & Diamond Business Man HONGKONG
              </p>
            </div>
          </div>
          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user5} alt="" />
              </div>
              <br />
              <p className="s12name">SHRI RASHMI KAMDAR</p>
              <p className="s12sub">RAMSENA COMMITTEE</p>
              <p className="s12third">
                Business Man & Socialist New Jersey , USA
              </p>
            </div>
          </div>
          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user6} alt="" />
              </div>
              <br />
              <p className="s12name">PV SUNIL</p>
              <p className="s12sub">RAMSENA COMMITTEE</p>
              <p className="s12third">Carnival Cinemas CMD</p>
            </div>
          </div>
          <div className="s12card">
            <div className="s12card2">
              <div className="s12img">
                <img src={user7} alt="" />
              </div>
              <br />
              <p className="s12name">SUBODH DALAL</p>
              <p className="s12sub">RAMSENA COMMITTEE</p>
              <p className="s12third">Politician & Business Man</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section12;
