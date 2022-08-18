import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="zaplanuj">Zaplanuj </div>
                <div className="space"></div>
                <div className="jedzonko"> Jedzonko</div>
            </div>
            <Navbar/>
            <MobileNavbar/>
        </div>
    )
}

export default Header