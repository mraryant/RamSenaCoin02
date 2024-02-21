// import React from "react";
import "../styles/Section7.css";
import la1 from '../assets/lo1.png'
import la2 from '../assets/lo2.png'
import la3 from '../assets/lo3.png'
import la4 from '../assets/lo4.png'
import la5 from '../assets/lo5.png'
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
                            <div className="log">
                                <img src={la1} alt="" />
                            </div>
                            <div className="log"><img src={la2} style={{width:"50px", height:"50px"}} alt="" /></div>
                            <div className="log"><img src={la3} alt="" /></div>
                            <div className="log"><img src={la4} alt="" /></div>
                            <div className="log"><img src={la5} alt="" /></div>
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
