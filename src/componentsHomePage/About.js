import React from "react";
import AboutPhoto1 from "./AboutPhoto1";
import AboutPhoto2 from "./AboutPhoto2";
import AboutPhoto3 from "./AboutPhoto3";

const About = () => {
    return (
        <div className="about" id="about">
            <AboutPhoto1 id="about1"/>
            <AboutPhoto2 id="about2"/>
            <AboutPhoto3 id="about3"/>
        </div>
    )
}

export default About;
