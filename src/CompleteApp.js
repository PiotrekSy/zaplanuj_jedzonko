import './sass/CompleteApp.scss';
import HomePage from "./componentsHomePage/HomePage"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PlanningApp from "./componentsApp/PlanningApp"
import React from "react";

function CompleteApp() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/planningApp" element={<PlanningApp/>}/>
            </Routes>
        </Router>
    );
}

export default CompleteApp;
