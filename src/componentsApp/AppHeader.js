import AppNavbar from "./AppNavbar";
import React from "react";
import AppMobileNavbar from "./AppMobileNavbar";

const AppHeader = () => {
    return (
        <div className="appHeader">
            <div className="logo">
                <div className="zaplanuj">Zaplanuj</div>
                <div className="space"></div>
                <div className="jedzonko">Jedzonko</div>
            </div>
            <AppNavbar/>
            <AppMobileNavbar/>
        </div>
    )
}

export default AppHeader