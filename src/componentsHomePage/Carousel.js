import React from "react";
import {reasons} from "./reasons";

const Carousel = () => {

    return (<div>
        <div className="carouselLeftButton">aa</div>
        <div className="carouselRightButton">aa</div>
        <div className="carousel">
            {reasons.map((item, index) =>
                <div className="carouselItem"
                     key={index}>
                    <div className="carouselTitle">{item.title}</div>
                    <div className="carouselText">{item.text}</div>
                </div>)}
        </div>
    </div>)
}

export default Carousel;
