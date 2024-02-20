import React from "react";
import "../styles/Section6.css";
import s6img from "../assets/s6img.svg";
import s6icon1 from "../assets/s6icon1.svg";
import s6icon2 from "../assets/s6icon2.svg";
import s6icon3 from "../assets/s6icon3.svg";
import arrow1 from "../assets/arrow2.svg";

const Section6 = () => {
  return (
    <>
      <div className="s6main">
        <p
          className="tokehead"
          style={{ textTransform: "uppercase", fontWeight: 700 }}
        >
          Listing on Ramsena Coin
        </p>
        <div className="s6content">
          <div className="s6left">
            <div className="s6imagearea">
              <img src={s6img} alt="" className="s6img" />
              {/* <p className="s6leftheading">New <br />
Listing Platforms</p> */}
            </div>
          </div>
          <div className="s6right">
            <div className="s6d1">
              <img src={s6icon2} alt="" className="s6img2" />
              <a href="" className="s6button">
                <p className="s6visit">Visit</p>
                <img src={arrow1} className="s6arrow" alt="" />
              </a>
            </div>
            <div className="s6d1">
              <img src={s6icon1} alt="" className="s6img2" />
              <a href="" className="s6button">
                <p className="s6visit">Visit</p>
                <img src={arrow1} className="s6arrow" alt="" />
              </a>
            </div>
            <div className="s6d1">
              <img src={s6icon3} alt="" className="s6img2" />
              <a href="" className="s6button">
                <p className="s6visit">Visit</p>
                <img src={arrow1} className="s6arrow" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
