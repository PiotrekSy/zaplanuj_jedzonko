import React from "react";
import AppHeader from "./AppHeader";
import AppMain from "./AppMain";

const PlanningApp = () => {
    return (
        <div className="planningApp">
            <AppHeader className="appHeader"/>
            <AppMain className = "appWrapper"/>
        </div>
    )
}

export default PlanningApp