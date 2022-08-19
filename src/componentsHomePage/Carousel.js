import React from "react";
import reasons from "./Reasons";

const Carousel = () => {
    return (
        <>
            <div className="carouselLeftButton"></div>
            <div className="carouselRightButton"></div>
            <div className="carousel">
                {reasons.map((item, index) =>
                    <div className="carouselItem" key={index}>
                        <div className="carouselTitle">item.title</div>
                        <div className="carouselText">{item.text}</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Carousel;
