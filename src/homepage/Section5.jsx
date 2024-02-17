import React from "react";
import "../styles/Section5.css";
import background from "../assets/roadmap.mp4";
const Section5 = () => {
  return (
    <>
      <div className="roadmap" style={{ padding: 20 }}>
        <div className="container" style={{}}>
          <p
            className="tokehead"
            style={{
              marginBottom: 60,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Ramsena coin Roadmap
            <br />
            <p className="tokepara" style={{ textTransform: "uppercase" }}>
              blockchain a Solid Infrastructure for Growth
            </p>
          </p>
          <video autoPlay loop muted playsInline className="s5video">
            <source src={background} type="video/mp4" />
          </video>
          <div className="row">
            <div className="col-md-12">
              <div className="main-timeline">
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">01</div>
                    <h3 className="title">PHASE 1</h3>
                    <p className="description">RAMSENA COIN DEVELOPMENT </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">02</div>
                    <h3 className="title">PHASE 2</h3>
                    <p className="description">COIN LAUNCHING </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">03</div>
                    <h3 className="title">Phase 3</h3>
                    <p className="description">
                      OPENING NEW BRANCHES OF THE RAMSENA COIN{" "}
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">04</div>
                    <h3 className="title">PHASE 4</h3>
                    <p className="description">FUNDING WEB SERIES </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">05</div>
                    <h3 className="title">Phase 5</h3>
                    <p className="description">NGO SOCIAL WORK </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">06</div>
                    <h3 className="title">PHASE 6</h3>
                    <p className="description">CONTRIBUTE FUND TO RAM MADIR </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">07</div>
                    <h3 className="title">Phase 7</h3>
                    <p className="description">
                      LAUNCH EDUCATION SPONSERSHIP PROGRAM{" "}
                    </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">08</div>
                    <h3 className="title">PHASE 8</h3>
                    <p className="description">LAUNCH SAVE COW CAMPAIGN </p>
                  </a>
                </div>
                <div className="timeline">
                  <a className="timeline-content">
                    <div className="timeline-year">09</div>
                    <h3 className="title">Phase 9</h3>
                    <p className="description">
                      LAUNCH RAM SENA NFT AND METAVERSE CONCEPT{" "}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
