import React from 'react'
import '../styles/Section8.css'
import arrow1 from '../assets/arrow2.svg'
import news1 from '../assets/news1.svg'
import news2 from '../assets/news2.svg'
import news3 from '../assets/news3.svg'
import news4 from '../assets/news4.svg'
import news5 from '../assets/news5.svg'
import news6 from '../assets/news6.svg'
import news7 from '../assets/news7.svg'
import news8 from '../assets/news8.svg'
import news9 from '../assets/news9.svg'
import news10 from '../assets/news10.svg'
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
                        <div className="s8circle"><img src={news1} alt="" /></div>
                        <div className="s8circle"><img src={news2} alt="" /></div>
                        <div className="s8circle"><img src={news3} alt="" /></div>
                        <div className="s8circle"><img src={news4} alt="" /></div>
                        <div className="s8circle"><img src={news5} alt="" /></div>


                        <div className="s8circle"><img src={news6} alt="" /></div>
                        <div className="s8circle"><img src={news7} alt="" /></div>
                        <div className="s8circle"><img src={news8} alt="" /></div>
                        <div className="s8circle"><img src={news9} alt="" /></div>
                        <div className="s8circle"><img src={news10} alt="" /></div>

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