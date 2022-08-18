import Navbar from "./Navbar";
import AppNavbar from "./AppNavbar";
import React from "react";

const AppHeader = () => {
    return (
        <div className="appHeader">
            <div className="logo">
                <div className="zaplanuj">Zaplanuj</div>
                <div className="space"></div>
                <div className="jedzonko"> Jedzonko</div>
            </div>
            <Navbar/>
            <AppNavbar/>
        </div>
    )
}

export default AppHeader