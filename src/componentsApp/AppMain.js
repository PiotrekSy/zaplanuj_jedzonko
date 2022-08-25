import React from "react";
import AppAuth from "./AppAuth";
import AppContent from "./AppContent"

const AppMain = () => {
    return (
        <div className="mainContainer">
            <AppAuth/>
            <AppContent/>
        </div>
    )
}

export default AppMain