import React from "react";
import Carousel from "./Carousel"
import Newsletter from "./Newsletter";

const FirstSection = () => {
    return (
        <div className="carouselWrapper">
            <Carousel className="carousel"/>
            <Newsletter/>
        </div>
    )
}

export default FirstSection;
