// import React from "react";
import "../styles/Section1.css";
import background from "../assets/background.mp4";
// import TopNavbar from "../components/Topnav";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import coin from "../assets/coin.png";
import "../components/Topnav.css";
import TopNavbar from "../components/Topnav";
// import logo from "../assets/logo.svg";
const Section1 = () => {
  return (
    <>
      <div className="section1Main" >
        <div id="navs1" style={{ width: "100%", height: "fit-content"  }}>
          <TopNavbar />

        </div>
        <video autoPlay loop muted playsInline className="video">
          <source src={background} type="video/mp4" />
        </video>
        <div className="sec1overlay"></div>
        <div className="sec1coin">
          <img src={coin} alt="" />
        </div>

        <div className="sec1leftarea">
          <div className="sec1toke">
            <p>Tokenomics</p>
            <img src={arrow1} alt="" />
          </div>
          <div className="sec1roadmap">
            <p>Download Whitepaper</p>
            <img src={arrow1} alt="" />
          </div>
        </div>

        <div className="sec1bottomcontent">
          <div className="sec1left">
            <p className="sec1para">
              {"World's"} biggest virtual <br />
              connection of Hindutva.
            </p>
            <p className="sec1title">
              Welcome To <br />
              Ramsena Coin
            </p>
          </div>
          <div className="sec1right">
            <div className="sec1btnleft">
              <p>Buy Now</p>
              <img src={arrow2} alt="" />
            </div>
            <div className="sec1buttons">
              <p className="sec1desc">
                Welcome to Ramsena Coin, where innovation meets purpose. {"We're"}
                more than just a cryptocurrency {"we're"} a symbol of unity & power
                of 1.5 Billions {"people's"} heart, promoting understanding and
                cooperation among diverse communities.{" "}
              </p>
              <div className="sec1btnright"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
