import React, {useState, useEffect} from "react";
import db from "../firebase"
import {collection, onSnapshot} from "firebase/firestore";

const Carousel = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, "carousel"), (snapshot) => {
            setData(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (<div>
        <div className="carouselLeftButton">aa</div>
        <div className="carouselRightButton">aa</div>
        <div className="carousel">
            {/*TODO PAGINACJA PONIŻEJ => tło z firabase*/}
            {data.map((item, index) =>
                <div className="carouselItem"
                     style={{backgroundColor: "yellow"}}
                     key={index}>
                    <div className="carouselTitle">{item.title}</div>
                    <div className="carouselText">{item.text}</div>
                </div>)}
        </div>
    </div>)
}

export default Carousel;
