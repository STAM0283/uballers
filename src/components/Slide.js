import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from "react-slideshow-image";
import basketball_1 from '../data/image/basketball_1.jpg';
import basketball_2 from '../data/image/basketball_2.jpg';
import basketball_3 from '../data/image/basketball_3.jpg';
import basketball_4 from '../data/image/basketball_3.jpg';
import moon from '../data/image/moon.jpg';
import shoes from '../data/image/shoes.jpg';

import "./slide.css";

const proprieties = {
    duration: 5000,
    transitionDuration : 500,
    infinite: true,
    indicators: true,
    arrows: true

}
const slide = () => {
    return (
        <div className="slide-container" style={{width: "80%", margin: "auto", border: "2px solid black", marginTop:"20px"}}>
            <Slide {...proprieties}>
                <div className="each-slide">
                    <div>
                        <img src={basketball_1} alt="baskettball" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={basketball_2} alt="baskettball"/>
                    </div>
                 </div>
                 <div className="each-slide">   
                    <div>
                        <img src={basketball_3} alt="baskettball" />
                    </div>
                 </div>
                 <div className="each-slide">   
                    <div>
                        <img src={basketball_4} alt="baskettball" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={moon} alt="moon baskettball" />
                    </div>
                </div> 
                <div className="each-slide">
                    <div>
                        <img src={shoes} alt="shoes baskettball" />
                    </div>
                </div>
            </Slide>
        </div >
    )
}

export default slide
