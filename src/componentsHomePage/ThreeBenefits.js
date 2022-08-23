import React from "react";
import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import db from "../firebase";

const ThreeBenefits = () => {


    const [data, setData] = useState([])

    useEffect(() => {
        onSnapshot(collection(db, "carousel"), (snapshot) => {
            setData(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
            {data.map((item, index) =>
                <div className="benefitsItem"
                     key={index}>
                    <div className="carouselTitle">{item.title}</div>
                    <div className="carouselText">{item.text}</div>
                </div>)}
        </div>
    )
}

export default ThreeBenefits;
