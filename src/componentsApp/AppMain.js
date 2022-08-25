import React from "react";
import AppAuth from "./AppAuth";
import AppContent from "./AppContent"

const AppMain = () => {
    return (
        <div className="appWrapper">
            <AppAuth className="appAuth"/>
            <AppContent className="appContent"/>
        </div>
    )
}

export default AppMain