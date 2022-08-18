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
            <FirstSection path='/carousel' className="carousel"/>
            <Benefits path="/isItWorth" title = "isItWorth" className="benefits"/>
            <About path="/about" className="about"/>
            <Contact path="/contact" className="contact"/>
        </div>
    )
}

export default HomePage