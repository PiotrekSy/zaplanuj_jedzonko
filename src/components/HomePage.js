import React from "react";
import Header from "./Header"
import IsItWorth from "./IsItWorth"
import About from "./About"
import Contact from "./Contact"

const HomePage = () => {
    return (
        <div className="homePage">
            <Header path='/' className="header"/>
            <IsItWorth path="/isItWorth" className="isItWorth"/>
            <About path="/about" className="about"/>
            <Contact path="/contact" className="contact"/>
        </div>
    )
}

export default HomePage