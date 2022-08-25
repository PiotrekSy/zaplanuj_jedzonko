import React from "react";
import Header from "./Header"
import Benefits from "./Benefits"
import About from "./About"
import Contact from "./Contact"
import FirstSection from "./FirstSection"

const HomePage = () => {
    return (
        <div className="homePage">
            <Header className="header"/>
            <FirstSection id="carousel" path='/carousel' className="carousel"/>
            <Benefits id="benefits" path="/benefits" title="isItWorth" className="benefits"/>
            <About id="about" path="/about" className="about"/>
            <Contact id="contact" path="/contact" className="contact"/>
        </div>
    )
}

export default HomePage;