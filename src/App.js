import './sass/App.scss';
import HomePage from "./components/HomePage"
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import PlanningApp from "./components/PlanningApp"
import React from "react";

function App() {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/planningApp" element={<PlanningApp/>}/>
            </Routes>
        </Router>
    );
}

export default App;
