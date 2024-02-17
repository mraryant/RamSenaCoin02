// import React from "react";
import "../styles/Section7.css";

import background from "../assets/s7video.mp4";
const Section7 = () => {
    return (
        <>
            <p className="s7maintitle">Tokenomics of Ramsena coin</p>
            <div className="sec7main">
                <div className="s7left">
                    <video autoPlay loop muted playsInline className="s7video">
                        <source src={background} type="video/mp4" />
                    </video>
                </div>
                <div className="s7right">
                    <div className="s7m1">
                        <div className="s7c1">
                            <p className="s7small">Token Name</p>
                            <p className="s7title">RAM SENA (RAMSENA)</p>
                        </div>
                        <div className="s7c1">
                            <p className="s7small">Token Name</p>
                            <p className="s7title">RAM SENA (RAMSENA)</p>
                        </div>
                    </div>
                    <div className="s7m1">
                        <div className="s7c1">
                            <p className="s7small">Token Name</p>
                            <p className="s7title">RAM SENA (RAMSENA)</p>
                        </div>
                        <div className="s7c1">
                            <p className="s7small">Network</p>
                            <p className="s7title">BEP20</p>
                        </div>
                    </div>
                    <div className="s7m1">
                        <div className="s7c1">
                            <p className="s7small">Supply</p>
                            <p className="s7title">10,000,000,000</p>
                        </div>
                        <div className="s7c1">
                            <p className="s7small">Decimal</p>
                            <p className="s7title">18</p>
                        </div>
                    </div>
                    <div className="s7m1">
                        <div className="s7c1">
                            <p className="s7small">Buy With</p>
                            <p className="s7title">BNB , USDT</p>
                        </div>
                        <div className="s7c1">
                            <p className="s7small">Listed On</p>
                            <p className="s7title">XT.com , Tookit , Biconomy</p>
                        </div>
                    </div>
                    <div className="s7token">
                        <div className="s7logo">
                            <div className="log"></div>
                            <div className="log"></div>
                            <div className="log"></div>
                            <div className="log"></div>
                            <div className="log"></div>
                        </div>
                        <p className="address">
                            <span>Contract Address:</span>{" "}
                            0xbb51784a641472f7B4fC5af9CB4042bD52DE54a9
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section7;
