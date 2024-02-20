import React from 'react'
import '../styles/Section8.css'
import arrow1 from '../assets/arrow2.svg'
const Section8 = () => {
    return (
        <>
            <div className="s8main">

                <div className="s8left">
                    <p className="s8head">
                        LATEST NEWS
                    </p>
                    <p className="s8para">
                        Ramsena Coin Can Be Utilized To Fund The Production Of A New Web Series Centred Around The Life And Teachings Of Lord ShreeRam And Hindutva Ideology. Ramsena Embarks On An Ambitious Venture To Curate And Produce A Compelling Web Series That Transcends Boundaries And Explores The Rich Tapestry Of Cultural Narratives.
                    </p>
                </div>
                <div className="s8right">
                    <div className="s8circles">
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>


                        <div className="s8circle"></div>
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>
                        <div className="s8circle"></div>

                    </div>

                    <a href="" className="s8btn">
                        <p className="s6visit">See More</p>
                        <img src={arrow1} className='s6arrow' alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Section8