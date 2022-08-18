import React from "react";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";


const PlanningApp = () => {
    return (
        <div className="planningAppBackground">
            <Navbar/>
            <MobileNavbar/>
            <div>APKA</div>
        </div>
    )
}

export default PlanningApp