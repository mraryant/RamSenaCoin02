import React from "react";
import "../styles/Section11.css";
import background from "../assets/s11video.mp4";
const Section11 = () => {
  return (
    <>
      <div className="s11main">
        <p className="s11title">
          Discover Ramsena's New E-Commerce Shopping Platform
        </p>
        <p className="s11subhead">
          Exciting news for ramsena coin holders and shoppers alike! Ramsena is
          proud to introduce its brand-new e-commerce online shopping platform.
          This platform promises to revolutionize your online shopping
          experience with a seamless fusion of cryptocurrency and retail.
        </p>
        <div className="s11content">
          <div className="s11left">
            <video autoPlay loop muted playsInline className="s11video">
              <source src={background} type="video/mp4" />
            </video>
          </div>
          <div className="s11right">
            <div className="s11sub">
              <p className="s11smallhead">Ramsena Coin Integration</p>
              <p className="s11smallpara">
                Shop with ease using Ramsena Coin for transactions, providing
                you with a secure and efficient payment method.
              </p>
            </div>
            <div className="s11sub">
              <p className="s11smallhead">Ramsena Coin Integration</p>
              <p className="s11smallpara">
                Shop with ease using Ramsena Coin for transactions, providing
                you with a secure and efficient payment method.
              </p>
            </div>
            <div className="s11sub">
              <p className="s11smallhead">Ramsena Coin Integration</p>
              <p className="s11smallpara">
                Shop with ease using Ramsena Coin for transactions, providing
                you with a secure and efficient payment method.
              </p>
            </div>
            <div className="s11sub">
              <p className="s11smallhead">Ramsena Coin Integration</p>
              <p className="s11smallpara">
                Shop with ease using Ramsena Coin for transactions, providing
                you with a secure and efficient payment method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section11;
