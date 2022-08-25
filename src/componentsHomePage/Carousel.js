import React, {useRef} from "react";
import {reasons} from "./reasons";

const Carousel = () => {

    let carousel = useRef()

    const moveCarousel = delta => {

        if (carousel.current) {
            const width = carousel.current.offsetWidth;
            carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0)
        }
    }

    return (
        <div>
            <div className="carousel">
                <div className="carouselLeftButton" onClick={() => moveCarousel(-1)}>
                    <div className="carouselIcon"></div>
                </div>
                <div className="carousel" ref={carousel}>
                    {reasons.map((item, index) =>
                        <div className="carouselItem"
                             key={index}>
                            <div className="carouselTitle">{item.title}</div>
                            <div className="carouselText">{item.text}</div>
                        </div>)}
                </div>
                <div className="carouselRightButton" onClick={() => moveCarousel(1)}>
                    <div className="carouselIcon"></div>
                </div>

            </div>
        </div>)
}

export default Carousel;
